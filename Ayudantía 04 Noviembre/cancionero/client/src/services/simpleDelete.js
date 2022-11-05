import axios from 'axios';

export async function simpleDelete (url) {
  try{
      const apiResponse= await axios.delete(url);
      return apiResponse
  }catch(error){
      return {error:`se ha producido un error: ${error}`}
  }
}