
import React from "react";
import { hot } from 'react-hot-loader/root';
import Login from './js/login';
import ImportFile from './js/importFile';

class App extends React.Component {
  constructor(){
    super()
    this.state={
      submitted:false
    }
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();
    this.setState({ submitted: true })
  }
  render() {
    return (
      <div id="app-container">
        {this.state.submitted?<ImportFile/>:<Login onSubmit={this.onSubmit}/>}
        

      </div>

    );
  }
}

export default hot(App);
