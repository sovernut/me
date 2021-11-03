import './App.css';

import { Route } from 'react-router';

import {
  CssBaseline,
  GeistProvider,
} from '@geist-ui/react';

import Main from './components/Main';
import Resume from './components/Resume';

function App() {
  return (
    <GeistProvider>
      <div className="App">
        <CssBaseline />
        <Route path="/metwo">
          <header className="App-header">Hi there</header>
        </Route>
        <Route path="/me" exact>
          <Main />
        </Route>
        <Route path="/me/resume">
          <Resume />
        </Route>
      </div>
    </GeistProvider>
  );
}

export default App;
