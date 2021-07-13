import React  from 'react';
import Home from './page/home/Home';
import Navigation from "./components/shared/navigation/Navigation";
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Navigation/>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
