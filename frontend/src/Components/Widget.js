import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons'


class Widget extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        this._isMounted = true;
        fetch("http://ergast.com/api/f1/2019/drivers.json")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.MRData.DriverTable.Drivers.lenght
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Erreur : {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Chargement…</div>;
        } else {
            return (
                <div className="widget">
                    <div className="widget-name">{this.props.name}</div>
                    <div className="widget-data">{items} <FontAwesomeIcon icon={faArrowCircleDown} /></div>
                </div>
            );
        }
    }
}

export default Widget