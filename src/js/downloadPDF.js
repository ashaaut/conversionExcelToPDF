import React from "react";
import jsPDF from 'jspdf'

class DownloadPDF extends React.Component {
  constructor(props) {
    super(props);
  }
  generatePdf(data, keys) {
    var doc = new jsPDF('p', 'pt');
    var x = 20;
    for (let j = 0; j < data.length; j++) {
      console.log(data[j])
      doc.text(20, x, keys[j] + ": " + data[j].toString())
      x = x + 20;
    }
    doc.save('sample-file.pdf')
  }

  render() {
    var data = this.props.data
    var keys = this.props.keys
    console.log("hii")
    console.log(data)
    console.log(keys)
    return (
      <div >
        <button onClick={() => this.generatePdf(data, keys)} >Download PDF</button>
      </div>
    );
  }
}

export default DownloadPDF;
