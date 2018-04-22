import React from "react";

import { Media } from "./../../components";

import { getFilms } from '../../../domain';

import './styles.css';

export default class HomePage extends React.Component {
  state = {
    films: []
  }

  componentWillMount(){
    getFilms().then(resp => {
      const data = resp.data;
      const films = data.results.sort((a,b) => {return a.release_date.substring(0,4) - b.release_date.substring(0,4) });
      this.setState({films});
    });
  }

  renderFilms() {
    const films = this.state.films || [];
      return films.map(film => (
         <Media key={film.episode_id} film={film}></Media>
    ));
  }
 
  render() {
    return (
      <div className="content-films">
        {this.renderFilms()}
      </div>
    );
  }
}
