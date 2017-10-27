import React, { Component } from 'react';
import AudioList from './components/AudioList';
import Message from './components/Message';
import Player from './components/Player';
import './App.css';

import audio4 from './audio/white4.mp3';
import audio5 from './audio/whiteheartbeat.mp3';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      audioCurrent: {},
      audioList: [
        { title: 'white noise waves', file: audio4 },
        { title: 'white noise with heartbeat', file: audio5 }
      ]
    }
  }

  componentWillMount() {
    this.setState({ audioCurrent: this.state.audioList[0] });
  }

  onListItemClick(listItem) {
    this.setState({ audioCurrent: listItem })
  }

  render() {
    return (
      <div className='App'>
        <h1>white noise generator</h1>

        <Message audioCurrent={this.state.audioCurrent} />

        <Player
          key={this.state.audioCurrent.title}
          file={this.state.audioCurrent.file}
        />

        <AudioList
          list={this.state.audioList}
          audioCurrent={this.state.audioCurrent}
          onClick={this.onListItemClick.bind(this)}
        />
      </div>
    );
  }
}

export default App;
