const {Schema,model}= require("mongoose")

const userSchema = new Schema({

    username:{
        type:String,
        unique:true,
        
    },
    password:{
        type:String,
        //required:true
    },
    campus:{
        type:String,
        enum:["Madrid","Barcelona","Miami","Paris","Berlin","Amsterdam","Mexico","Lisbon","Sao Paulo"],
        //required:[true,"Debes agregar un Nombre"],
        unique:[true,"El campus ya existe"]
    },
    course:{
        type:String,
        enum:["Web Dev","UX/UI","Data Analytics","Cyber Security"],
        //required:[true,"Debes agregar un Nombre"],
        unique:[true,"El curso ya existe"]
    },
    avatar:{type:String},
    googleID:String,
    


},{timestamps:true}) 


module.exports = model("User",userSchema)