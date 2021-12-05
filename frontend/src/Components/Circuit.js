import React, { useState, useEffect } from 'react';
import Yas_Marina_Circuit from './Image/Yas_Marina_Circuit.png';

export default function Circuit() {
    const [post, setPost] = useState([])

    useEffect(() => {
        const fetchData = () => {
            fetch('http://ergast.com/api/f1/circuits/yas_marina.json')
                .then((response) => {
                    return response.json()

                })
                .then((result) => {
                    setPost(result.MRData.CircuitTable.Circuits)
                })
        }
        fetchData()

    }, [])
    return (


        <ul>

            {(typeof post != 'undefined') ? (
                post.map((item) => (
                    <ul><div className="Circuit">
                        <div className="DetailCircuit"><br /><br />
                            Nom du circuit : {item.circuitName}<br /><br />
                            Lieu : {item.Location.locality}&nbsp;<br /><br />
                            Pays : {item.Location.country}&nbsp;<br /><br />
                            Date : 2021-12-12
                        </div>
                        <div className="ImgCircuit">
                            <img src={Yas_Marina_Circuit} width="95%" alt="Image Circuit" ></img>
                        </div>
                    </div>
                    </ul>
                ))) :
                (
                    <li>Chargement des données ....</li>
                )
            }


        </ul >
    )
}