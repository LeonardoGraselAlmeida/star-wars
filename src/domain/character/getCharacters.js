import axios from 'axios';

const getCharacters = async id => {
  try {
    let url = `https://swapi.co/api/people`;

    if (id) {
      url = `${url}/${id}`;
    }

    return axios.get(url);
  } catch (error) {
    console.error(error);
  }
};

export default getCharacters;
