const {Schema, model} = require("mongoose")

const userSchema= new Schema({
    email:{type:String},
    password:{type:String},
    campus:{type:String,
        enum:["Madrid","Barcelona","Miami","Paris","Berlin","Amsterdam","Mexico","SaoPaulo","Lisbon"]},
  
    course:{type:String,
        enum:["Web Dev","UX/UI", "Data Analytics"]},
   
    image:{type:String},
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
      }

    })
