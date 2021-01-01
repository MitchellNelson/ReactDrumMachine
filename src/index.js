import React from 'react';
import ReactDOM from 'react-dom';
import Drums from './Drums';
import './styles/styles.css';
import './audio/Kick1.wav'
import { createStore }  from 'redux';
import allReducer from './reducers'
import { Provider } from 'react-redux';

ReactDOM.render(
	<Drums/>,
	document.getElementById('drums')
);