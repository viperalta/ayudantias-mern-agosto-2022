const mongoose = require("mongoose");

const uniqueValidator = require("mongoose-unique-validator")

const UserSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:[true,"El nombre es obligatorio"]
    },
    lastName:{
        type:String,
        required:[true,"El apellido es obligatorio"]
    },
    email:{
        type:String,
        required:[true,"El email es obligatorio"],
        validate:{
            validator:(val)=>/^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message:"Por favor ingresa un correo valido"
        },
        unique:true
    },
    password:{
        type:String,
        required:[true,"Por favor ingresar contraseña"],
        minlength:[8,"La contraseña debe tener minimo 8 caracteres"]
    }
},
{timestamps:true});

UserSchema.plugin(uniqueValidator,{message:"Error, el correo ya existe"});

//Establecemos el get y el set de la variable confirmPassword, que llega como campo en el body, 
//pero no es almacenada en el UserSchema.
UserSchema.virtual("confirmPassword")
    .get(()=>this._confirmPassword)
    .set((value)=>(this._confirmPassword=value))

//Validamos que la password y la confirmPassword sean iguales.
//Validación se hará sólo si el usuario es nuevo this.isNew
UserSchema.pre("validate",function(next){
    if(this.isNew && this.password !== this["confirmPassword"]){
        this.invalidate("confirmPassword","Las contraseñas deben ser iguales")
    }
    next()
})

const User = mongoose.model("User",UserSchema);
module.exports = {UserSchema,User}