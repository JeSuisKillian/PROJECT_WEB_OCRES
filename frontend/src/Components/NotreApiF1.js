import React, { useState, useEffect } from 'react';

export default function NotreApi() {
    const [post, setPost] = useState([])

    useEffect(() => {
        const fetchData = () => {
            fetch('http://localhost:3000/posts')
                .then((response) => {
                    return response.json()

                })
                .then((result) => {
                    setPost(result)
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
                            Nom : {item.Nom}<br />
                            Prenom : {item.Prenom}<br />
                            Age : {item.Age}<br />
                            Ecurie : {item.Ecurie}<br />
                            Nombres de Victoires : {item.Victoires}<br /><br />
                        </li>
                    ))) :
                    (
                        <li>Chargement des données ....</li>
                    )}
            </ul>

        </ul>
    )
}