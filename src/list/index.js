import React from 'react';
import './index.css'
import Document from '../document/index';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            documnet: false
        }
    }

    showAddDocument = () => {
        this.setState({documnet: !this.state.documnet});
    }




    render() {
        return (
            <div className="wrapper">
                <ol>
                    <li> Task <button>edit</button></li>
                    <li> Contracts   <button>edit</button></li>
                    <li> Issues    <button>edit</button></li>
                </ol>
                <button onClick={this.showAddDocument}>Add</button>
                { this.state.documnet ? <Document/> : null}

            </div>
        );
    }
}

export default List;