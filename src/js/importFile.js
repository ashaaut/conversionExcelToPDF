
import React from "react";
import { ExcelRenderer, OutTable } from "react-excel-renderer";
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
    console.log(fileobj)
    ExcelRenderer(fileObj, (err, resp) => {
      if (err) {
        console.log(err);
      } else {
        this.setState({
          cols: resp.cols,
          rows: resp.rows
        });
        console.log(this.state);
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
       </div>
    );
  }
}

export default ImportFile;
