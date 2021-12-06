import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faSignOutAlt, faGasPump, faChargingStation } from '@fortawesome/free-solid-svg-icons'
import './App.css';
import logo from './images/logo.png';
import Home from "./routes/home";
import Pilot from "./routes/pilot";

export default function BasicExample() {
  return (
    <Router>

      <div className="App">
        <div className="menu2">
          <div className="menu2-content">



            <FontAwesomeIcon icon={faGasPump} /> <span><Link to="/" class="nounderline" >Formule 1</Link></span>&nbsp;&nbsp;

            <FontAwesomeIcon icon={faCog} /> <span><Link to="/pilot" class="nounderline">Paramètres</Link></span>


          </div>
        </div>
        <header className="App-header">

          <div className="menu">
            <div className="menu-content">
              <div className="logo-wrapper">
                <img src={logo} className="logo" alt="logo" />
                <h1>KALD</h1>
              </div>
              <ul>
                <li className="active">
                  <FontAwesomeIcon icon={faGasPump} /> <span><Link to="/" class="nounderline" >Formule 1</Link></span>
                </li>
                <li className="active">
                  <FontAwesomeIcon icon={faCog} /> <span><Link to="/pilot" class="nounderline">Paramètres</Link></span>
                </li>
              </ul>

            </div>
          </div>

          <div className="dashboard">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/pilot">
                <Pilot />
              </Route>
            </Switch>
          </div>

          <div className="copyright">
            Copyright © 2021 Kald Inc. Tous droits réservés.
          </div>
        </header>
      </div>
    </Router>
  );
}