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
            contractor: ['BMW', 'Motorola', 'Samsung', 'Apple'],
        };

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

    onCancelClick = () => {
        const {cancelClick} = this.props;
        if (typeof cancelClick === 'function') {
            cancelClick();
        }
    }

    handleSubmit = (event) => {
        // const { documentNumber, text, date } = this.state;
        const { onNewData } = this.props;
        event.preventDefault();
        let jsonData = this.state
        if (typeof onNewData === 'function') {
            onNewData(jsonData);
            this.onCancelClick();
        }

    }



    render() {
        const { text, date, contractor } = this.state;
        return (
            <div className="wrapper">
            <form onSubmit={this.handleSubmit}>
                <label> Document number
                    <input type="text" onChange={this.handleChangeNumber}/>
                </label>
                <label>
                    Please pick contractor:<br></br>
                    <select>
                        {contractor ? contractor.map( (event, index) => <option value={event[index]} key={index}>{event}</option> ) : '' }
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