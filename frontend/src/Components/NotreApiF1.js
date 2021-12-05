import React, { useState, useEffect } from 'react';

export default function NotreApi() {
    const [post, setPost] = useState([])

    useEffect(() => {
        const fetchData = () => {
            fetch('http://localhost:3001/posts')
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
                            {item.title}
                        </li>
                    ))) :
                    (
                        <li>Chargement des données ....</li>
                    )}
            </ul>

        </ul>
    )
}