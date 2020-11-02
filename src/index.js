import React from 'react';
import ReactDOM from 'react-dom';
import Drums from './Drums';

var playingIndex = 0;

function tick() {
	ReactDOM.render(
		<Drums playingIndex={playingIndex}/>,
		document.getElementById('root')
	);
	playingIndex = (playingIndex + 1) % 16
}

setInterval(tick, 400);