import React, { useState, useEffect } from 'react';
export default function ChampionnatDriver() {
  const [race, setRace] = useState([])

  let tableau = new Array();


  useEffect(() => {
    const fetchData = () => {
      fetch(`http://ergast.com/api/f1/2021/20/driverstandings.json?limit=2`)
        .then((response) => {
          return response.json()

        })
        .then((result) => {
          setRace(result.MRData.StandingsTable.StandingsLists[0])
        })
        .then(function () {
          (typeof race.DriverStandings != 'undefined') ? (
            race.DriverStandings.map((item) => (

              tableau.push(item.points)
            )
            )) : (
            <li>Chargement des données ....</li>
          )
        })

    }
    fetchData()

  }, [])
  return (
    <ul>
      {(typeof race.DriverStandings != 'undefined') ? (
        race.DriverStandings.map((item) => (

          <div>
            {tableau[0]}
          </div>
        )
        )) : (
        <li>Chargement des données ....</li>
      )}

    </ul>
  )
}