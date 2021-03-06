const User = require("../model/user.model")

exports.getUsers = async (req,res) => {
    const users = await user.find();
    res.status(200).json(users)
}

exports.getUser = async (req,res) => {
    const {usersId} = req.params;
    const user = await user.findById(usersId);
    res.status(200).json(user)
}

exports.createUser = async (req,res) =>{
    const user = await user.create(req.body);
    res.status(200).json(user)
}

exports.updateUser = async (req,res) => {
    const{usersId} = req.params;
    const user = await user.findByIdAndUpdate(usersId, req.body);
    res.status(200).json(user)
}