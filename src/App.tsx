import React from 'react';
import logo from './logo.svg';
import './App.css';
import CvComponent from './CvComponent';
import * as soso from "./cv/Soso";

function App() {
  return (
    <div className="App">
      <CvComponent education={soso.education} jobs={soso.jobs} languages={soso.languages} />
    </div>
  );
}

export default App;