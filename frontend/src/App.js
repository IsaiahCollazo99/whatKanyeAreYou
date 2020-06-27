import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={"/"}>
          <LandingPage />
        </Route>

        <Route exact path={"/quiz/:id"}>
          <div className="quizDisplayContainer">
            Quiz
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
