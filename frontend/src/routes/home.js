import React from 'react';
import Graphique from '../Components/Graphique'
import Formula from '../Components/Formula'
import Circuit from '../Components/Circuit'
//import Championnat from '../Components/Championnat'
import ChampionnatDriver from '../Components/ChampionnatDriver'
import NotreApiF1 from '../Components/NotreApiF1'
//import Widget from '../Components/Widget'
import LastResult from '../Components/LastResult';

export default function Home() {
    return (
        <div>
            <div className="widgetmodule">
                <div className="graphmodule graphmodule-formula"><br /><h2>Liste des pilotes</h2><Formula /></div>
                <div className="graphmodule graphmodule-formula"><br /><h2>Dernier résultat</h2><LastResult /></div>
            </div>
            <div className="graphmodule"><br /><h2>Informations sur le prochain circuit</h2><Circuit /></div>
            <div className="graphmodule"><br /><h2>Course aux points</h2><ChampionnatDriver /></div>
            <div className="graphmodule"><br /><h2>Classement des conducteurs</h2><Graphique /></div>
            <div className="graphmodule"><br /><h2>Notre API</h2><NotreApiF1 /></div>
        </div>
    );
}