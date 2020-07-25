
import React from "react";
import { ExcelRenderer, OutTable } from "react-excel-renderer";
import DownloadPDF from './downloadPDF'
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
      }
    });
  }


  render() {

    return (
      <div className="upload">
      <div className="import-container">
        <label>Upload file</label>
        <input className="import-input"
          type="file"
          onChange={this.changeHandler}
        />
      </div>
      <div>
        {this.state.rows.length > 0 ? <TableView data={this.state.rows} /> : ""}

      </div>
      </div> 
    );
  }
}

export default ImportFile;
