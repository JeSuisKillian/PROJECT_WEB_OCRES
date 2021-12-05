import React from 'react';
import PilotAdd from "../Components/notreapi/PilotAdd";
import PilotDelete from '../Components/notreapi/PilotDelete';

export default function Pilot() {
    return (
        <div>
            <div className="graphmodule">
                <h2>Pilot</h2>
                <PilotAdd />
            </div>
            <div className="graphmodule">
                <h2>Pilot</h2>
                <PilotDelete />
            </div>
        </div>
    );
}