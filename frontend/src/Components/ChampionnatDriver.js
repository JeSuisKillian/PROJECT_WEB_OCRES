import React, { useState, useEffect } from 'react';
let ValueClas = [0][0];

export default function ChampionnatDriver() {
    const [race, setRace] = useState([])
    var i = 1;
    useEffect(() => {
        const fetchData = () => {
            fetch(`http://ergast.com/api/f1/2021/${i}/driverstandings.json`)
                .then((response) => {
                    return response.json()

                })
                .then((result) => {
                    setRace(result.MRData.StandingsTable.StandingsLists[0])
                })
        }
        fetchData()

    }, [])
    return (
        <ul >
            Season : {race.season}&nbsp;&nbsp;&nbsp;Round : {race.round}<br />
            <ul className="column_gap">
                {(typeof race.DriverStandings != 'undefined') ? (
                    race.DriverStandings.map((item) => (

                        <li
                            key={item.position}>{item.Driver.givenName}&nbsp;{item.Driver.familyName}&nbsp;&nbsp;&nbsp;{item.points}&nbsp; wins : {item.wins}
                        </li>
                    )
                    )) :
                    (
                        <li>Chargement des données ....</li>
                    )}
            </ul>
        </ul>
    )
}