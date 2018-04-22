import React from 'react';
import PropTypes from 'prop-types';
import * as firebase from 'firebase';

import './styles.css';

import MediaBody from './media-body/MediaBody';

class Media extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: '',
      year: ''
    };
  }

  componentWillMount() {
    const year = this.props.film.release_date.substring(0, 4);
    firebase
      .database()
      .ref(`/${this.props.film.episode_id}`)
      .on('value', snap => {
        this.setState({ img: snap.val(), year: year });
      });
  }

  render() {
    return (
      <div>
        <div className="media-container">
          <a
            className="media-link"
            title={`${this.props.film.title} (${this.state.year})`}
            role="button"
          >
            <div className="media-imagem">
              <div className="media-imagem-container">
                <div className="imagem-content">
                  <img
                    className="imagem"
                    height="183"
                    width="120"
                    alt=""
                    src={this.state.img}
                  />
                </div>
              </div>
            </div>
            <div className="title-container">
              <div className="title">
                <span>{this.props.film.title}</span>
              </div>
              <div className="year">{this.state.year}</div>
            </div>
          </a>
        </div>
        <div className="media-body">
          <MediaBody film={this.props.film} />
        </div>
      </div>
    );
  }
}

Media.propTypes = {
  film: PropTypes.object
};

export default Media;
