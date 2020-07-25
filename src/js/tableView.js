import React, {Component } from "react";


export default class Table extends Component {

    constructor(props) {
        super(props);
        this.getHeader = this.getHeader.bind(this);
        this.getRowsData = this.getRowsData.bind(this);
    }

    getHeader() {
       var headers=this.props.data[0];
        return headers.map((header) =><th>{header.toUpperCase()}</th>
        )

    }
    renderRow(row){
        return row.map((key) => <td key={key}>{key}</td>)
    }
    getRowsData (){
        var items = this.props.data;
        return items.map((row)=> <tr>{this.renderRow(row)}</tr>
        )
        }
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>{this.getHeader()}</tr>
                    </thead>
                    <tbody>
                        {this.getRowsData()}
                    </tbody>
                </table>
            </div>

        );
    }
}

