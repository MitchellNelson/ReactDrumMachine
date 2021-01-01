import React from 'react';
import {Howl, Howler} from 'howler';
import './audio/Kick1.wav';

class DrumElement extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isClicked: false,
      volume: 0.9,
      sound: new Howl({
          src: [this.props.soundPath]
        })
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({volume: event.target.value});
    this.setState({sound: new Howl({
        src: [this.props.soundPath],
        volume: event.target.value
      })
    });
  }


  handleClick() {
    if (!this.props.volumeMode){
      this.setState(state => ({
        isClicked: !this.state.isClicked
      }));
    }
  }

  render() {
    var volumeDisplay;
    if (this.props.volumeMode && this.state.isClicked) {
      console.log("volume Mode true!!");
      volumeDisplay = (<input 
        type="range" min="0" max="1" step="0.1" 
        value={this.state.volume} orient="vertical"
        onChange={this.handleChange}/>);
    }
    var className = 'drumElement notPlaying ';
    //className += this.props.play ? 'playing ' : 'notPlaying ';
    className += this.state.isClicked ? 'isClicked' : '';

    if (this.props.play && this.state.isClicked){
      this.state.sound.play();
    }
    return (
      <td style={{filter:'brightness('+ this.props.brightness + '%)'}}  onClick={this.handleClick} className={className}>
        {volumeDisplay}
      </td>
    );
  }
}

export default DrumElement;
