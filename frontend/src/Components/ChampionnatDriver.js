import React, { useState, useEffect } from 'react';
let ValueClas = [0][0];

export default function ChampionnatDriver() {
    const [race, setRace] = useState([])
    var i = 21;
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
        <div>
            Saison : {race.season}&nbsp;&nbsp;&nbsp;Courses : {race.round}<br />
            <ul className="column_gap2">
                {(typeof race.DriverStandings != 'undefined') ? (
                    race.DriverStandings.map((item) => (

                        <ul
                            key={item.position}>{item.position} : &nbsp;{item.Driver.givenName}&nbsp;{item.Driver.familyName}&nbsp;&nbsp;&nbsp;{item.points} pts&nbsp; wins : {item.wins}
                        </ul>
                    )
                    )) :
                    (
                        <li>Chargement des données ....</li>
                    )}
            </ul>
        </div>
    )
}