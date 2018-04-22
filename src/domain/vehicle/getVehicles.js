import axios from 'axios';

const getVehicles = async (id) => {
    try {
       let url = `https://swapi.co/api/vehicles`;

       if(id){
           url = `${url}/${id}`
       }

       return axios.get(url)

    } catch (error) {
        console.error(error)
    }
}

export default getVehicles