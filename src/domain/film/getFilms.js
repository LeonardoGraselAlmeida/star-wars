import axios from 'axios';

const getFilms = async () => {
    try {
       return axios.get('https://swapi.co/api/films/')
    } catch (error) {
        console.error(error)
    }
}

export default getFilms