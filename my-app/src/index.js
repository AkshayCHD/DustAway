import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyD9ud09tVb0XOh1EIppZankmgTWT5FEY5c",
    authDomain: "dustaway-4354f.firebaseapp.com",
    databaseURL: "https://dustaway-4354f.firebaseio.com",
    projectId: "dustaway-4354f",
    storageBucket: "dustaway-4354f.appspot.com",
    messagingSenderId: "905302221949"
  };
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
