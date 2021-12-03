import React, { useState, useEffect } from 'react';

export default function Championnat() {
  const [race, setRace] = useState([])

  useEffect(() => {
    const fetchData = () => {
      fetch('http://ergast.com/api/f1/2021/20/driverstandings.json')
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
    <ul className="column_gap">
      Season : {race.season}<br />
      Round : {race.round}<br /><br />
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
  )
}