import React from 'react';
import Graphique from './Components/Graphique'
import Formula from './Components/Formula'
import Championnat from './Components/Championnat'
import Widget from './Components/Widget'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faSignOutAlt, faGasPump, faChargingStation } from '@fortawesome/free-solid-svg-icons'
import './App.css';
import logo from './images/logo.png';

function App() {
  return (
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
                <FontAwesomeIcon icon={faGasPump} /> <span>Formule 1</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faChargingStation} /> <span>Formule e</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faCog} /> <span>Paramètres</span>
              </li>
            </ul>
            {/*<div className="logout">
              <FontAwesomeIcon icon={faSignOutAlt} /> <span>Déconnexion</span>
            </div>*/}
          </div>
        </div>
        <div className="dashboard">
          <div className="graphmodule graphmodule-formula"><h2>Liste des pilotes</h2><Formula /></div>
          <div className="graphmodule graphmodule-formula"><h2>Classement des conducteurs</h2><Championnat /></div>
          <div className="graphmodule"><h2>Information prochain circuit</h2><Graphique /></div>
          <div className="graphmodule"><h2>Course aux points</h2><Graphique name="Coursepoints" /></div>
          <div className="graphmodule"><h2>Dernier resultat</h2><Graphique name="Dernierresultat" /></div>
          <div className="graphmodule"><h2>Notre API</h2><Graphique name="Notreapi" /></div>

        </div>
        <div className="copyright">
          Copyright © 2021 Kald Inc. Tous droits réservés.
        </div>
      </header>
    </div>
  );
}

export default App;
