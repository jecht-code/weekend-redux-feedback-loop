import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './App.css';

import Youfeelingtoday from '../YouFeelingToday/YouFeelingToday';
import Understandingtoday from '../UnderstandingContent/UnderstandingContent';
import Supportedtoday from '../Supported/Supported';
import Commenttoday from '../Comments/Comments';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

      <HashRouter>
        <Route  path="/" exact>
          <Youfeelingtoday />
        </Route>
        <Route  path="/understanding">
          <Understandingtoday />
        </Route>
        <Route  path="/supported">
          <Supportedtoday />
        </Route>
        <Route  path="/comment" exact>
          <Commenttoday />
        </Route>
      </HashRouter>
    </div>
  );
}

export default App;
