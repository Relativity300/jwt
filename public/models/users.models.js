
const { Schema, model } = require('mongoose');

const UserModel = new Schema({

    identificacion:{
        type:Number,
        required:["La identificación es obligatorio"],
        unique: true
    },

    nombre:{
        type:String,
        required:["El nombre es obligatorio"]
    },

    apellidos:{
        type:String,
        required:["El apellido es obligatorio"]
    },

    direccion:{
        type:String,
        required:["La dirección es obligatoria"]
    },

    telefono:{
        type:String,
    },

    email:{
        type:String,
        required:["El usuario es obligatorio"],
        unique: true
    },

    password:{
        type:String,
        required:["La password es obligatoria"]
    },

    role:{
        type:String,
        required:["El rol es obligatorio"]
    },

    estado:{
        type:Boolean,
        default:true
    }
})



module.exports = model('user', UserModel);