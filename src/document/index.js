/**
 * Created by marcin on 31.03.2017.
 */
import React from 'react'
import './index.css'

class Document extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            documentNumber: '',
            text: 'Please place your thoughts .',
            date: '',
            contractors: ['BMW', 'Motorola', 'Samsung', 'Apple'],
            contractor: ''
        };

    }

    componentDidMount(){
        const { onEditData }= this.props;
        if(onEditData){
        this.setState({
            documentNumber: onEditData.documentNumber,
            text: onEditData.text,
            date: onEditData.date,
            contractor: onEditData.constructor,
        })}
        console.log(onEditData)
    }

    handleChangeText = (event) => {
        this.setState({text: event.target.value});
    }
    handleChangeDate = (event) => {
        this.setState({date: event.target.value});
    }

    handleChangeNumber = (event) => {
        this.setState({documentNumber: event.target.value});
    }

    handleChangeContractor = (event) => {
        this.setState({contractor: event.target.value});
    }

    onCancelClick = () => {
        const {cancelClick} = this.props;
        if (typeof cancelClick === 'function') {
            cancelClick();
        }
    }

    handleSubmit = (event) => {
        const { onNewData } = this.props;
        event.preventDefault();
        let jsonData = this.state
        if (typeof onNewData === 'function') {
            onNewData(jsonData);
            this.onCancelClick();
            console.log(this.state)
        }

    }



    render() {
        const { text, date, contractors } = this.state;
        return (
            <div className="wrapper">
            <form onSubmit={this.handleSubmit}>
                <label> Document number
                    <input type="text" placeholder="YYYY/DDD/DD" pattern="(19[789]\d|20[01]\d).\d*.\d*" required value={this.state.documentNumber} onChange={this.handleChangeNumber}/>
                </label>
                <label>
                    Please pick contractor:<br></br>
                    <select onChange={this.handleChangeContractor}>
                        {contractors ? contractors.map( (event, index) => <option value={event} key={index}>{event}</option> ) : '' }
                    </select>
                </label>
                <label>
                    Document date:
                    <input type="date" value={date} onChange={this.handleChangeDate} />
                </label>
                <label>
                    Name:
                    <textarea value={text} onChange={this.handleChangeText} />
                </label>
                <input type="submit" value="Submit" />
                <input type="submit" value="Cancel" onClick={this.onCancelClick} />
            </form>
            </div>
        );
    }
}
export default Document;