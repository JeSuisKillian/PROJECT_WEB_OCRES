import React from 'react';
import PilotAdd from "../Components/notreapi/PilotAdd";
import PilotDelete from '../Components/notreapi/PilotDelete';

export default function Pilot() {
    return (
        <div>
            <div className="graphmodule">
                <h2>Ajouter un Pilote</h2><br /><br />
                <PilotAdd />
            </div>
            <div className="graphmodule">
                <h2>Supprimer un Pilote</h2><br /><br />
                <PilotDelete />
            </div>
        </div>
    );
}