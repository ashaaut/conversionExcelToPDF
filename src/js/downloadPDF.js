
import React from "react";

import jsPDF from 'jspdf'
class DownloadPDF extends React.Component {

  constructor(props) {
    super(props);
    
    
  }


  generatePdf(data)  {
      // console.log("hiii")
    console.log(data)
    var doc = new jsPDF('p', 'pt');
    var x=20;
    for(let i=1;i<data[1].length;i++){
      
      doc.text(20,x,data[i])
      x=x+20;
    }
    // data[1].map(e=>doc.text(20,20,e.toString()))
    // doc.text(40,30,data[1][1])
 
    // doc.setFont('helvetica')
    // doc.setFontType('normal')
    // doc.text(20, 60, 'This is the content area.')
    // doc.addPage() // this code creates new page in pdf document
    // doc.setFont('helvetica')
    // doc.setFontType('normal')
    // doc.text(20, 100, 'This is the second page.')
 
 
    // doc.save('sample-file.pdf')
  }
 
  render() {
    var data=this.props.data
    console.log(data)
    return (
      <div >
        
        <button onClick={this.generatePdf(data)} >Download PDF</button>       
       </div>
    );
  }
}

export default DownloadPDF;
