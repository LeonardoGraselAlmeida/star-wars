import axios from 'axios';

const getFilms = async id => {
  try {
    let url = `https://swapi.co/api/films`;

    if (id) {
      url = `${url}/${id}`;
    }

    return axios.get(url);
  } catch (error) {
    console.error(error);
  }
};

export default getFilms;
