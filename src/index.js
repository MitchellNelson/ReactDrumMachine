import React from 'react';
import ReactDOM from 'react-dom';
import Drums from './Drums';
import './styles/styles.css';
import './audio/Kick1.wav'


var playingIndex = 0;

function tick() {
	ReactDOM.render(
		<Drums playingIndex={playingIndex}/>,
		document.getElementById('drums')
	);
	playingIndex = (playingIndex + 1) % 16
}

setInterval(tick, 200);