import React, { useState, useEffect } from 'react';

export default function LastResult() {
  const [raceResult, setRaceResult] = useState([])

  useEffect(() => {
    const fetchData = () => {
      fetch('http://ergast.com/api/f1/2021/21/results.json')
        .then((response) => {
          return response.json()

        })
        .then((result) => {
          setRaceResult(result.MRData.RaceTable.Races[0])
          console.log(result.MRData.RaceTable.Races);
        })
    }
    fetchData()

  }, [])
  return (

    <ul>
      {<ul className="center" >{raceResult.raceName}&nbsp;&nbsp;&nbsp;{raceResult.date} <br /><br /></ul>}
      <ul className="column_gap">
        {(typeof raceResult.Results != 'undefined') ? (
          raceResult.Results.map((item) => (

            <ul key={item.position}>{item.position} : &nbsp;{item.Driver.givenName}&nbsp;{item.Driver.familyName} </ul>
          )
          )) :
          (
            <li>Chargement des données ....</li>
          )}
      </ul>

    </ul>
  )
}