import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage';
import QuizDisplay from './components/QuizDisplay';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={"/"}>
          <LandingPage />
        </Route>

        <Route exact path={"/quiz/:id"}>
          <QuizDisplay />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
