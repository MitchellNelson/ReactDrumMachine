import React from 'react';
import DrumElement from './DrumElement';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons'

const volumeIcon = <FontAwesomeIcon icon={faVolumeUp}/>

class DrumRow extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      volumeMode: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      volumeMode: !this.state.volumeMode
    }));
  }

  renderRowElements() {
    var elements = [];
    var numElements = this.props.numMeasures * this.props.beatsPerMeasure;
    for (var i = 0; i < numElements; i++){
      var commonProps = {
        soundPath: this.props.soundPath,
        playingIndex: this.props.playingIndex,
        volumeMode: this.state.volumeMode,
        play: this.props.playingIndex === i,
        brightness: 100 - ((i % this.props.beatsPerMeasure) * 10)
      }
      elements.push(<DrumElement {...commonProps}/>);
    }
    return elements;
  }

  render() {
    return (
      <tr>
        <div>
          <td>
            {this.props.name}
            <button onClick={this.handleClick}>{volumeIcon}</button>
          </td>
        </div>
        {this.renderRowElements()}
      </tr>
    );
  }
}

export default DrumRow;