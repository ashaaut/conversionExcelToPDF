
import React from "react";
import jsPDF from 'jspdf'

class DownloadPDF extends React.Component {
  constructor(props) {
    super(props);
  }


  generatePdf(data, keys) {
    var doc = new jsPDF('p', 'pt');
    var x = 20;
    for (let j = 0; j <= data.length - 1; j++) {
      doc.text(20, x, keys[j] + ": " + data[j].toString())
      x = x + 20;
    }
    doc.save('sample-file.pdf')
  }

  render() {
    var data = this.props.data
    var keys = this.props.keys
    console.log(data)
    return (
      <div >
        <button onClick={()=>this.generatePdf(data, keys)} >Download PDF</button>
      </div>
    );
  }
}

export default DownloadPDF;
