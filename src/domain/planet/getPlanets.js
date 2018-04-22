import axios from 'axios';

const getPlanets = async (id) => {
    try {
       let url = `https://swapi.co/api/planets`;

       if(id){
           url = `${url}/${id}`
       }

       return axios.get(url)

    } catch (error) {
        console.error(error)
    }
}

export default getPlanets