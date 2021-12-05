import React from 'react';
import Graphique from './Components/Graphique'
import Formula from './Components/Formula'
import Circuit from './Components/Circuit'
import Championnat from './Components/Championnat'
import ChampionnatDriver from './Components/ChampionnatDriver'
import NotreApiF1 from './Components/NotreApiF1'
import Widget from './Components/Widget'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faSignOutAlt, faGasPump, faChargingStation } from '@fortawesome/free-solid-svg-icons'
import './App.css';
import logo from './images/logo.png';
import LastResult from './Components/LastResult';

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
          <div className="widgetmodule">
            <div className="graphmodule graphmodule-formula"><br /><h2>Liste des pilotes</h2><Formula /></div>
            <div className="graphmodule graphmodule-formula"><br /><h2>Dernier résultat</h2><LastResult /></div>
          </div>
          <div className="graphmodule"><br /><h2>Informations sur le prochain circuit</h2><Circuit /></div>
          <div className="graphmodule"><br /><h2>Course aux points</h2><ChampionnatDriver /></div>
          <div className="graphmodule"><br /><h2>Classement des conducteurs</h2><Graphique /></div>
          <div className="graphmodule"><br /><h2>Notre API</h2><NotreApiF1 /></div>

        </div>
        <div className="copyright">
          Copyright © 2021 Kald Inc. Tous droits réservés.
        </div>
      </header>
    </div>
  );
}

export default App;
