import React from "react";
import PropTypes from "prop-types";
import * as firebase from 'firebase';

import './styles.css';

class Media extends React.Component {
  state = {
    img: '',
    year: ''
  }  

  componentWillMount(){
    const year = this.props.date.substring(0,4);
    firebase.database().ref(`/${this.props.id}`).on('value', snap => {
      this.setState({img: snap.val(), year: year});
  });
     
  }

  render() {
    return (
        <div className="media-container">
          <a className="media-link" title={`${this.props.title} (${this.state.year})`} role="button" href="#" >
            <div className="media-imagem">
              <div className="media-imagem-container">
                <div className="imagem-content">
                  <img className="imagem" height="183" width="120" alt="" src={this.state.img}/>
                </div>
              </div>
            </div>
            <div className="title-container">
              <div className="title">
                <span>{this.props.title}</span>
              </div>
              <div className="year">{this.state.year}</div>
            </div>
          </a>
        </div>
    );
  }
}

Media.propTypes = {
  date: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.number
};

export default Media;