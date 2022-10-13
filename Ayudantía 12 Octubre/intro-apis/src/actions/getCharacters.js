export async function getCharacters(url){
    try{
        const apiResult = await fetch(url).then(result=>result.json())
        return apiResult;
    }catch(error){
        return {error:"Se ha producido un error: "+error}
    }
}