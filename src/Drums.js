import React from 'react';
import {useState, useEffect} from 'react'
import DrumRow from './DrumRow';
import Indicators from './Indicators';
import kick from './audio/Kick1.wav';
import snare from './audio/Snare1.wav';
import clap from './audio/Clap1.wav';
import hihat from './audio/Hi Hat1.wav';
import openhihat from './audio/Open Hihat.mp3';
import tamberine from './audio/Tamberine1.wav';
import {edit, select} from './actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStepBackward, faPlay, faPause } from '@fortawesome/free-solid-svg-icons'

const playIcon = <FontAwesomeIcon icon={faPlay}/>;
const pauseIcon = <FontAwesomeIcon icon={faPause}/>;
const startOverIcon = <FontAwesomeIcon icon={faStepBackward}/>;

function Drums(props){
  const [bpm, setBPM] = useState(120);
  const [beatsPerMeasure, setBeatsPerMeasure] = useState(4);
  const [numMeasures, setNumMeasures] = useState(4);
  const [playingIndex, setPlayingIndex] = useState(0);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    var ticker = setInterval( () => {
      if (playing){
        setPlayingIndex((playingIndex + 1) % (numMeasures * beatsPerMeasure));
      }
    }, 250 );
    return function cleanup() {
      clearInterval(ticker);
    };
  });

  function togglePlaying() {
    setPlaying(!playing);
  }

  function startOver() {
    setPlayingIndex(0);
  }

  var commonProps = {
    beatsPerMeasure: beatsPerMeasure,
    numMeasures: numMeasures,
    playingIndex: playingIndex
  }
  return (
    <div>
      <div id='controls'>
        <button onClick={startOver}>{startOverIcon}</button>
        <button onClick={togglePlaying}>{playing ? pauseIcon : playIcon}</button>
      </div>
      <table>
        <tbody id='drums-body'>
          <DrumRow name='Kick' {...commonProps} soundPath={kick}/>
          <DrumRow name='Snare' {...commonProps} soundPath={snare}/>
          <DrumRow name='Clap' {...commonProps} soundPath={clap}/>
          <DrumRow name='HiHat' {...commonProps} soundPath={hihat}/>
          <DrumRow name='Open HiHat' {...commonProps} soundPath={openhihat}/>
          <DrumRow name='Tamberine' {...commonProps} soundPath={tamberine}/>
          <Indicators {...commonProps}/>
        </tbody>
      </table>
    </div>
  );
}

export default Drums;

