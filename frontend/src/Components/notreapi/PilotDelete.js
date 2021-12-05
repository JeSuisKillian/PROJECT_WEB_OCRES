import React from 'react';
import axios from 'axios';

export default class PilotDelete extends React.Component {
    state = {
        id: '',
    }

    handleChangeId = event => {
        this.setState({ id: event.target.value });
    }

    handleSubmitDelete = event => {
        event.preventDefault();

        axios.delete(`http://localhost:3001/posts/${this.state.id}`)
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
                        Person ID:
                        <input type="text" name="id" onChange={this.handleChangeId} />
                    </label>
                    <button type="submit">Delete</button>
                </form>
            </div>
        )
    }
}