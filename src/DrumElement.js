import React from 'react';
import ReactDOM from 'react-dom';
import {Howl, Howler} from 'howler';

class DrumElement extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isClicked: false,
      sound: new Howl({
          src: [this.props.soundPath]
        })
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(state => ({
      isClicked: !state.isClicked
    }));
  }

  render() {
    var className = 'notPlaying';
    if (this.props.play){
      className = 'playing';
      if (this.state.isClicked){
        this.state.sound.play();
      }
    }
    if(this.state.isClicked){
      className += 'isClicked';
    }

    return (
      <td onClick={this.handleClick} className={className}>
        
      </td>
    );
  }
}

export default DrumElement;
