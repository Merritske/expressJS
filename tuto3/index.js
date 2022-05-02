const express = require('express')
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');

const users = require('./models/users')

app.use(bodyParser.json())
mongoose.connect('mongodb+srv://admin:AdminFront.22@cluster1.pwjqz.mongodb.net/tuto3?retryWrites=true&w=majority', (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("connected")
    }
})


const validToken = (req, res, next)=>{
    try{
        const token = req.headers['token'];
        jwt.verify(token, 'JWT_secret')
        next()
    }catch(error){
        
        res.status(402).send('no money, no honey :)')
    }
}

app.post('api/register',  (req, res) => {
    //hashing the passwords
    //special function(password) -> jhodfzaofdg58962gzer2458gaag = token 
    //bcrypt of jwt

    const { username, password: plainTextPassword, adres } = req.body
    password =  bcrypt.hash(plainTextPassword, 10)
    try {
        const response = users.create({
            username,
            password,
            adres
        })
        console.log('user created', response)
    } catch (error) {
        if (error.code === 11000) {
            return res.json({ status: 'error', error: "username already in use" })
        }
        throw (error)
    }
    console.log(password)
})


app.post('api/login', (req, res) => {
    const { username, password, adres } = req.body

    const user = users.findOne({ username })

    if (bcrypt.compare(password, user.password)) {
        const token = jwt.sign({
            id: user._id,
            username: user.username
        },
            "JWT_secret", {expiresIn: '1h'})

        return res.json({
            status: "ok",
            message: 'user logged in',
            token
        })
    }

    if (!user) {
        res.json({
            status: "error",
            message: 'user not found, create account'
        })
    }

    res.json({
        status: "error",
        data: "COMING SOON"
    })
})

//pasword veranderen
app.post('/api/login', (req, res)=>{
    const {token, newpassword: plainTextPassword} = req.body
    if(!plainTextPassword || typeof plainTextPassword !== 'string'){
        return res.json({
            status: "error", error: "invalid password"
        })
    }
    if(plainTextPassword.length < 5){
        return res.json({
            status: 'error',
            error: "PAssword too small"
        })
    }
    try{
        const user = jwt.verify(token, "JWT_secret")
        const _id = user._id
    }catch(err){
        console.log(err)
    }
})

app.listen(1337, () => {
    console.log("server is running")
})