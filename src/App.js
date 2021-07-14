import React  from 'react';
import Home from './page/home/Home';
import Navigation from "./components/shared/navigation/Navigation";
import './App.css';
import Register from './page/register/Register';
import Login from './page/login/Login.jsx';
import { BrowserRouter, Switch, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Navigation/>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/register" exact>
          <Register/>
        </Route>
        <Route path="/login" exact>
          <Login/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
