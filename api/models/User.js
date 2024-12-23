const {mongoose} = require('mongoose')
const { Schema } = mongoose;

const userScheme = new Schema ({
    username: String,
    email: {type: String, unique: true},
    password: String,
   
    fristname: String,
    lastname: String,
    address: String,
    phone: Number,
    techstck: String
})

const UserModel = mongoose.model('User', userScheme)
module.exports = UserModel;



