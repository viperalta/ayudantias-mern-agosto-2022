const jwt = require("jsonwebtoken")

const authenticate = (req,res,next)=>{
    try{
        const jwtToken = req.cookies.usertoken;
        jwt.verify(jwtToken,process.env.SECRET_KEY,(err)=>{
            if(err) return res.status(401).json({verified:false})
            else next();
        })
    }catch(err){
        return res.sendStatus(500);
    }
}

module.exports = authenticate;