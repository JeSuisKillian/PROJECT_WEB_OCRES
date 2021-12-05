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
        <header className="App-header">
          <div className="menu">
            <div className="menu-content">
              <div className="logo-wrapper">
                <img src={logo} className="logo" alt="logo" />
                <h1>KALD</h1>
              </div>
              <ul>
                <li className="active">
                  <FontAwesomeIcon icon={faGasPump} /> <span><Link to="/">Formule 1</Link></span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faChargingStation} /> <span>Formule e</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faCog} /> <span><Link to="/pilot">Paramètres</Link></span>
                </li>
              </ul>
              {/*<div className="logout">
                  <FontAwesomeIcon icon={faSignOutAlt} /> <span>Déconnexion</span>
                </div>*/}
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