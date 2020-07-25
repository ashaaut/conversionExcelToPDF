import React, { PureComponent } from "react";
import DownloadPDF from './downloadPDF';

export default class Table extends React.Component {

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
        let datarows = row.map((key, index) => <td key={key}>{key}</td>)
        datarows.push(<td key={"export-key"}><DownloadPDF data={row} keys={this.props.data[0]}/></td>)
        return  datarows
    }
    getRowsData (){
        var items = this.props.data;
        return items.map((row, index)=> <tr key={index}>{this.renderRow(row)}</tr>
        )
        }
       
    render() {
        return (
            <div className="table-container">
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

