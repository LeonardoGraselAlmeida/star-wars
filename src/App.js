import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import * as firebase from 'firebase';

import Routes from './ui/routes';

var config = {
  apiKey: "AIzaSyDFbm_uZdjllw3FJfpnEG4TvKwrZMs1yRw",
  authDomain: "films-star-wars.firebaseapp.com",
  databaseURL: "https://films-star-wars.firebaseio.com",
  projectId: "films-star-wars",
  storageBucket: "",
  messagingSenderId: "351382284805"
};
firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Routes/>
      </BrowserRouter>
    );
  }
}

export default App;
