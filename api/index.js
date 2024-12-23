const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/User')
require('dotenv').config()
const app = express()

app.use(express.json());
app.use( 
    cors({
        credentials: true,
        origin: "http://localhost:3000",
    })
);

mongoose.connect(process.env.MONGO_URI)
app.get('/test', (req, res) => {
    res.json('Test work')
})
//register route
app.post('/register', async (req, res) => {
    const {username, email, password, Cpassword, fristname, lastname, address, phone, techstck} = req.body
   try {
    const userInfo = await User.create({
        username,
        email,
        password,
        Cpassword,
        fristname,
        lastname,
        address,
        phone,
        techstck
    })
    res.json(userInfo)

   } catch (error) {
    res.status(422).json(error)
   }

    

})

app.listen(4000)