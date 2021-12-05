import React from 'react';
import axios from 'axios';

export default class PilotAdd extends React.Component {
    state = {
        title: '',
        description: ''
    }

    handleChangeTitle = event => {
        this.setState({ title: event.target.value });
    }

    handleChangeDescription = event => {
        this.setState({ description: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();

        axios.post(`http://localhost:3001/posts`, {
            title: this.state.title,
            description: this.state.description
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
                        Person Title:
                        <input type="text" name="title" onChange={this.handleChangeTitle} />
                    </label>
                    <label>
                        Person Desc:
                        <input type="text" name="description" onChange={this.handleChangeDescription} />
                    </label>
                    <button type="submit">Add</button>
                </form>
            </div>
        )
    }
}