import React from 'react';
import PropTypes from "prop-types";

import './styles.css';

class MediaBody extends React.Component {
    render(){
        return (
            <div>
        <div>
            <span>Synopsis:</span>
            <p>{this.props.film.opening_crawl}</p>

            <span>Director:</span>
            <p>{this.props.film.director}</p>

            <span>Producer:</span>
            <p>{this.props.film.producer}</p>
        </div>
        <a className="link">Read more...</a>
        </div>
        )
    }

}

MediaBody.propTypes = {
    film: PropTypes.object
}

export default MediaBody;