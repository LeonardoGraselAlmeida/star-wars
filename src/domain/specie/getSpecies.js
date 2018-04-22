import axios from 'axios';

const getSpecies = async (id) => {
    try {
       let url = `https://swapi.co/api/species`;

       if(id){
           url = `${url}/${id}`
       }

       return axios.get(url)

    } catch (error) {
        console.error(error)
    }
}

export default getSpecies