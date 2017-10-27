import React, { Component } from 'react';
import AudioList from './components/AudioList';
import Player from './components/Player';
import './App.css';

import audio1 from './audio/01-White.mp3';
import audio2 from './audio/02-White.mp3';
import audio3 from './audio/03-White.mp3';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      audioPlaying: false,
      audioCurrent: {},
      audioList: [
        { title: 'White Noise 1', file: audio1 },
        { title: 'White Noise 2', file: audio2 },
        { title: 'White Noise 3', file: audio3 }
      ]
    }
  }

  onListItemClick(listItem) {
    this.setState({ audioCurrent: listItem })
  }

  render() {
    return (
      <div className='App'>
        <h1>white noise generator</h1>

        <p>now playing: {this.state.audioCurrent.title} </p>

        <Player
          key={this.state.audioCurrent.title}
          file={this.state.audioCurrent.file}
        />

        <AudioList
          onClick={this.onListItemClick.bind(this)}
          list={this.state.audioList}
        />
      </div>
    );
  }
}

export default App;
