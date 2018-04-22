import axios from 'axios';

const getStarships = async (id) => {
    try {
       let url = `https://swapi.co/api/starships`;

       if(id){
           url = `${url}/${id}`
       }

       return axios.get(url)

    } catch (error) {
        console.error(error)
    }
}

export default getStarships