import React from 'react';
import DrumRow from './DrumRow';
import kick from './audio/Kick1.wav';
import snare from './audio/Snare1.wav';
import clap from './audio/Clap1.wav';
import hihat from './audio/Hi Hat1.wav';
import openhihat from './audio/Open Hihat.mp3';
import tamberine from './audio/Tamberine1.wav';

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
    return (<table><tbody>
    	<DrumRow name='Kick' playingIndex={this.props.playingIndex} numElements={16} soundPath={kick}/>
    	<DrumRow name='Snare' playingIndex={this.props.playingIndex} numElements={16} soundPath={snare}/>
    	<DrumRow name='Clap' playingIndex={this.props.playingIndex} numElements={16} soundPath={clap}/>
      <DrumRow name='HiHat' playingIndex={this.props.playingIndex} numElements={16} soundPath={hihat}/>
      <DrumRow name='Open HiHat' playingIndex={this.props.playingIndex} numElements={16} soundPath={openhihat}/>
      <DrumRow name='Tamberine' playingIndex={this.props.playingIndex} numElements={16} soundPath={tamberine}/>
      </tbody></table>);
}

  render() {
    return (
      <div>
          {this.renderTableData()}
      </div>
    );
  }
}

export default Drums;

