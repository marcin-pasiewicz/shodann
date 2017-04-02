import React from 'react';
import './index.css'
import Document from '../document/index';

let itemData;

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            documnet: false,
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
        const itemIndex = index;
        itemData = this.state.data[index];
        console.log(this.state.data[index])
        this.showAddDocument()
    }
    addNewItem = data => {
        const newData = this.state.data.slice();
        newData.push(data);
        this.setState({data: newData});
    }


    render() {
        const { data } =this.state;
        const itemList = (
            <ul>
                {data ? data.map( (event, index) => <li value={event.documentNumber} key={index}>{event.documentNumber} <button onClick={()=>{this.itemClicked(index)}}>Edit</button></li> ) : '' }

                <button onClick={this.showAddDocument}>Add</button>
            </ul>
        )

        return (
            <div className="wrapper">
                    { this.state.documnet ? <Document
                    cancelClick={this.showAddDocument}
                    onNewData={this.addNewItem}
                    onEditData={itemData}
                /> : itemList}

            </div>
        );
    }
}

export default List;