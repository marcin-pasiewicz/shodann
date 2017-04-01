import React from 'react';
import './index.css'
import Document from '../document/index';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            documnet: false,
            itemIndex: 0,
            data: [{
                documentNumber: "2017/123/12",
                text: "Orders for new cars",
                date: "2017-03-17",
                contractor: 'BMW',
            }, {
                documentNumber: "2017/456/34",
                text: "New Macbooks Pro for developers",
                date: "2017-03-30",
                contractor: 'Apple',
            }],

        }
    }

    showAddDocument = () => {
        this.setState({documnet: !this.state.documnet});
    }

    itemClicked = index => {
        this.setState({
            itemIndex: index})
        console.log(this.state)
    }
    addNewItem = data => {
        const newData = this.state.data.slice();
        newData.push(data);
        this.setState({data: newData});
    }


    render() {
        const { data } =this.state;

        return (
            <div className="wrapper">
                <ul>
                    {data ? data.map( (event, index) => <li value={event.documentNumber} key={index}>{event.documentNumber} <button onClick={()=>{this.itemClicked(index)}}>Edit</button></li> ) : '' }
                </ul>
                <button onClick={this.showAddDocument}>Add</button>
                { this.state.documnet ? <Document
                    cancelClick={this.showAddDocument}
                    onNewData={this.addNewItem}
                /> : null}

            </div>
        );
    }
}

export default List;