import axios from 'axios';

export async function simplePost (url,values) {
    try{
        const apiResponse= await axios.post(url,values);
        return apiResponse
    }catch(error){
        return {error:`se ha producido un error: ${error}`}
    }
}