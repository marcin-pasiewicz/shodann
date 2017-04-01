/**
 * Created by marcin on 31.03.2017.
 */
import React from 'react'
import './index.css'

class Document extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Please place your thoughts .',
            date: '',
            contractor: ['BMW', 'Motorola', 'Samsung', 'Apple']
        };

    }

    handleChangeText = (event) => {
        this.setState({text: event.target.value});
    }
    handleChangeDate = (event) => {
        this.setState({date: event.target.value});
    }



    handleSubmit = (event) => {
        event.preventDefault();
    }

    render() {
        const { text, date, contractor } = this.state;
        console.log(contractor[0])
        return (
            <div className="wrapper">
            <form onSubmit={this.handleSubmit}>
                <label> Document number
                    <input type="number"/>
                </label>
                <label>
                    Please pick contractor:<br></br>
                    {contractor[0]}<input type="checkbox" value={contractor[0]} />
                    {contractor[1]}<input type="checkbox" value={contractor[1]} />
                    {contractor[2]}<input type="checkbox" value={contractor[2]} />
                    {contractor[3]}<input type="checkbox" value={contractor[3]} />
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
                <input type="submit" value="Cancel" />
            </form>
            </div>
        );
    }
}
export default Document;