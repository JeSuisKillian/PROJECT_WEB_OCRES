import React from 'react';
import axios from 'axios';
import IDPilote from '../IDPilote'

export default class PilotDelete extends React.Component {
    state = {
        _id: '',
    }

    handleChangeId = event => {
        this.setState({ _id: event.target.value });
    }

    handleSubmitDelete = event => {
        event.preventDefault();

        axios.delete(`http://localhost:3000/posts/${this.state._id}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmitDelete}>
                    <label>
                        ID du Pilote : &nbsp;
                        <input type="text" name="_id" onChange={this.handleChangeId} />
                    </label>&nbsp;&nbsp;
                    <button type="submit">Delete</button>
                </form>
                <br />Liste des pilotes : <br />
                <IDPilote />
            </div>
        )
    }
}