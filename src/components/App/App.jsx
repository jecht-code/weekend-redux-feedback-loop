import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';

import Youfeelingtoday from '../YouFeelingToday/YouFeelingToday';
import Understandingtoday from '../UnderstandingContent/UnderstandingContent';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

      <HashRouter>
        <Route  path="/">
          <Youfeelingtoday />
        </Route>
        <Route  path="/understanding">
          <Understandingtoday />
        </Route>
      </HashRouter>
    </div>
  );
}

export default App;
