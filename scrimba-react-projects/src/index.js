import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TravelJournal from './projs/04-TravelJournal.js';
import MemeGen from './projs/05-MemeGen';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='display-none'>

      <TravelJournal />
    </div>

    <MemeGen />

  </React.StrictMode>
);

// Project 01
// Project 02
// Project 03 "STATIC AIRBNB"


// Project 04 "TRAVEL JOURNAL"
    // 


// Project 05 "MEME GENERATOR"


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
