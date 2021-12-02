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
      {(typeof post != 'undefined') ? (
        post.map((item) => (
          <li>
            {item.familyName}&nbsp;{item.givenName}
          </li>
        ))) :
        (
          <li>Chargement des données ....</li>
        )}

    </ul>
  )
}