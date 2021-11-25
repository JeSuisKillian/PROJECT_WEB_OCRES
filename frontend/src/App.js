import React from 'react';
import Graphique from './Components/Graphique'
import Widget from './Components/Widget'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGripHorizontal, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import './App.css';
import logo from './logo.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="menu">
          <div className="logo-wrapper">
            <img src={logo} className="logo" alt="logo" />
          </div>
          <ul>
            <li className="active">
              <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faInstagram} /> <span>Instagram</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faLinkedin} /> <span>LinkedIn</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faCog} /> <span>Settings</span>
            </li>
          </ul>
          <div className="logout">
            <FontAwesomeIcon icon={faSignOutAlt} /> <span>Déconnexion</span>
          </div>
        </div>
        <div className="dashboard">
          <div className="graphmodule"><Graphique name="Alexandre" /></div>
          <div>
            <Widget name="mes abo" number="133" />
          </div>
        </div>
        <div className="copyright">
          Copyright © 2021 Kald Inc. Tous droits réservés.
        </div>
      </header>
    </div>
  );
}

export default App;
