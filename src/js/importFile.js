
import React from "react";
import { ExcelRenderer,OutTable } from "react-excel-renderer";
import  DownloadPDF from './downloadPDF'
import TableView from './tableView';

class ImportFile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      rows: [],
      cols: []
    };
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(event) {
    let fileObj = event.target.files[0];
  
    ExcelRenderer(fileObj, (err, resp) => {
      if (err) {
        console.log(err);
      } else {
        this.setState({
          cols: resp.cols,
          rows: resp.rows
        });
        // console.log(this.state.rows[0][1]);
      }
    });
  }

 
  render() {

    return (
      <div >
        <input
          type="file"
          onChange={this.changeHandler}
        />
        {this.state.rows.length>0? <TableView data={this.state.rows}/>:""}


        {/* <OutTable data={this.state.rows} columns={this.state.cols} tableClassName="ExcelTable2007" tableHeaderRowClass="heading" /> */}
       </div>
    );
  }
}

export default ImportFile;
