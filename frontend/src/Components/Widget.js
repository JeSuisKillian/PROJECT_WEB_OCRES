import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons'

class Widget extends React.Component {
    render() {
        return (
            <div className="widget">
                <div className="widget-name">{this.props.name}</div>
                <div className="widget-data">{this.props.number} <FontAwesomeIcon icon={faArrowCircleDown} /></div>
            </div>
        );
    }
}

export default Widget