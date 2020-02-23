const { model, Schema } = require("mongoose");
const PLM = require("passport-local-mongoose");

const userSchema = new Schema(
  { 
    username: String,
    
    password: String,
    
    campus:{
        type: String,
        enum: ["Madrid", "Barcelona", "Miami", "Paris", "Berlin", "Amsterdam", "México", "Sao Paulo", "Lisbon"]
    },
     
    course:{
      type: String,
      enum: ["WebDev", "UX/UI", "Data Analytics"]
    },

    image: String,
  },
  {
    timestamps: true
}
);


userSchema.plugin(PLM, { usernameField: "email" });

module.exports = model("User", userSchema);