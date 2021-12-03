import React, { useState, useEffect } from 'react';

export default function Formula() {
  const [post, setPost] = useState([])

  useEffect(() => {
    const fetchData = () => {
      fetch('http://ergast.com/api/f1/2021/drivers.json')
        .then((response) => {
          return response.json()

        })
        .then((result) => {
          setPost(result.MRData.DriverTable.Drivers)
        })
    }
    fetchData()

  }, [])
  return (


    <ul>
      {<ul className="center" >Saison 2021 <br /><br /></ul>}
      <ul className="column_gap">
        {(typeof post != 'undefined') ? (
          post.map((item) => (
            <li>
              {item.permanentNumber}&nbsp; | {item.familyName}&nbsp;{item.givenName}
            </li>
          ))) :
          (
            <li>Chargement des données ....</li>
          )}
      </ul>

    </ul>
  )
}