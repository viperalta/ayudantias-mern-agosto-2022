import axios from 'axios';

export async function simpleGetAuthenticated (url) {
    try{
        const apiResponse= await axios.get(url,{withCredentials:true});
        return apiResponse
    }catch(error){
        return {error:`se ha producido un error: ${error}`}
    }
}