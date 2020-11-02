import React from 'react';
import ReactDOM from 'react-dom';
import DrumRow from './DrumRow';


class Drums extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      measureNumbers: 4,
      beatsPerMeasure: 4,
      beatsPerMinute: 120,
      drumRow: [true, false, false, true]
    }
  }

renderTableData(){
    return (<div>
    	<DrumRow name='Kick' playingIndex={this.props.playingIndex} numElements={16} soundPath='audio/Kick1.wav'/>
    	<DrumRow name='Snare' playingIndex={this.props.playingIndex} numElements={16} soundPath='audio/Snare1.wav'/>
    	<DrumRow name='HiHat' playingIndex={this.props.playingIndex} numElements={16} soundPath='audio/Hi Hat1.wav'/>
    	</div>);
}

  render() {
    return (
      <div>
        <tbody>
          {this.renderTableData()}
        </tbody>
      </div>
    );
  }
}

export default Drums;

