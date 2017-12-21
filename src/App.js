import React, { Component } from 'react';
import Participant from './Participant';
import './App.css';

class App extends Component {

  constructor(){
    super();
    
    this.state = {};
    this.state.ParticipantList = [];
    this.state.ParticipantList.push("one");
  }

  showList(){
    return(
      <ul>
        {this.state.ParticipantList}
      </ul>
      );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Secret Santa</h1>
        </header>
        <p className="App-intro">
          To help with Secret Santa picking
        </p>

        <ul>
          {this.state.ParticipantList}
        </ul>

        <Participant participantList={this.state.ParticipantList} />
      </div>
    );
  }
}

export default App;
