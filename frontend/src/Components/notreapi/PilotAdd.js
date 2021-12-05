import React from 'react';
import axios from 'axios';

export default class PilotAdd extends React.Component {
    state = {
        Nom: '',
        Prenom: '',
        Age: '',
        Ecurie: '',
        Victoires: ''
    }

    handleChangeNom = event => {
        this.setState({ Nom: event.target.value });
    }

    handleChangePrenom = event => {
        this.setState({ Prenom: event.target.value });
    }

    handleChangeAge = event => {
        this.setState({ Age: event.target.value });
    }

    handleChangeEcurie = event => {
        this.setState({ Ecurie: event.target.value });
    }

    handleChangeVictoires = event => {
        this.setState({ Victoires: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();

        axios.post(`http://localhost:3000/posts`, {
            Nom: this.state.Nom,
            Prenom: this.state.Prenom,
            Age: this.state.Age,
            Ecurie: this.state.Ecurie,
            Victoires: this.state.Victoires
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Nom : &nbsp;
                        <input type="text" name="Nom" onChange={this.handleChangeNom} />
                    </label>&nbsp;&nbsp;
                    <label>
                        Prénom : &nbsp;
                        <input type="text" name="Prenom" onChange={this.handleChangePrenom} />
                    </label>&nbsp;&nbsp;
                    <label>
                        Age : &nbsp;
                        <input type="text" name="Age" onChange={this.handleChangeAge} />
                    </label><br /><br />&nbsp;&nbsp;
                    <label>
                        Ecurie : &nbsp;
                        <input type="text" name="Ecurie" onChange={this.handleChangeEcurie} />
                    </label>&nbsp;&nbsp;
                    <label>
                        Nombre de Victoires : &nbsp;
                        <input type="text" name="Victoires" onChange={this.handleChangeVictoires} />
                    </label><br /><br />

                    <button type="submit">Ajouter le pilote</button>
                </form>
            </div>
        )
    }
}