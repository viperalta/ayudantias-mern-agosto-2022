const { simplePost } = require("./simplePost")

const logout = async() => {
    try{
        const response = await simplePost("/api/logout");
        console.log("LOGOUT RESPONSE",response);
        if(!response){
            return {success:false,data:response}
        }else{
            return {success:true,data:response}
        }
    }catch(error){
        return{success:false,data:{errors:{error:error}}}
    }
}

export default logout;