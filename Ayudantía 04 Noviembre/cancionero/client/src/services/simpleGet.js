import axios from 'axios';

export async function simpleGet (url) {
    try{
        const apiResponse= await axios.get(url);
        return apiResponse
    }catch(error){
        return {error:`se ha producido un error: ${error}`}
    }
}