import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Ex7 from './ex7_radar';
import Ex6 from './ex6_formulaire';
import * as serviceWorker from './serviceWorker';

//Ex7 OU Ex6 POUR AFFICHER L'EXO SOUHAITE 
ReactDOM.render(<Ex7 />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
