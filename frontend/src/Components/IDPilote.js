import React, { useState, useEffect } from 'react';

export default function IDPilote() {
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
            <ul >
                {(typeof post != 'undefined') ? (
                    post.map((item) => (
                        <ul>
                            •&nbsp;{item.Prenom}&nbsp;
                            {item.Nom}&nbsp;: &nbsp;
                            {item._id}<br />

                        </ul>
                    ))) :
                    (
                        <li>Chargement des données ....</li>
                    )}
            </ul>

        </ul>
    )
}