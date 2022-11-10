const {User} = require("../models/user.model")
const jwt = require("jsonwebtoken");

module.exports.Register = async(req,res) => {
    try{
        const user = new User (req.body);
        await user.save()

        const jwtToken = jwt.sign({_id:user._id},process.env.SECRET_KEY)

        return res.cookie("usertoken",jwtToken,process.env.SECRET_KEY,{httpOnly:true})
                .json({message:"",email:user.email,_id:user._id})
    }catch(err){
        res.json({message:"Algo salio mal",errors:err.errors});
    }
}

module.exports.Login = async(req,res) => {
    try{
        const user = await User.findOne({email:req.body.email});

        if(user===null){
            res.json({errors:{error:{message:"El usuario no existe en la base de datos"}}})
        }

        if(req.body.password!==user.password){
            res.json({errors:{error:{message:"La contraseña es incorrecta"}}})
        }

        const jwtToken = jwt.sign({id:user._id},process.env.SECRET_KEY);

        return res.cookie("usertoken",jwtToken,process.env.SECRET_KEY,{httpOnly:true})
        .json({message:"",email:user.email,_id:user._id})

    }catch(err){
        res.json({message:"Algo salio mal",errors:err.errors});
    }
}

module.exports.Logout = async(req,res) => {
    try{
        res.clearCookie("usertoken");
        res.json({success:true})
    }catch(err){
        return({success:false,data:err.message})
    }
}

module.exports.getAll = (request, response) => {
    User.find({})
      .then((users) => response.json(users))
      .catch((err) => response.json(err));
  };

module.exports.getUser = async(req,res) => {
    try{
        const {id}=req.params
        const {email,firstName,lastName,_id} = await User.findById(id).exec();
        res.json({email,firstName,lastName,_id})
    }catch(err){
        return{success:false,data:err.message}
    }
}