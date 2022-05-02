//mongoDB
//import library
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const Post = require('./models/Post');
const dotenv = require("dotenv");
dotenv.config();
const User = require('./models/User');
const jwt = require('jsonwebtoken'); //for login

//set up middleware to be able to read express body
app.use(bodyParser.json())
mongoose.connect(process.env.DATA_URL, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('connected')
    }
})
//create middleware zodat enkel ingelogde users de posts kunnen zien
//middleware staat tussen de user en de posts //next()
const isTokenValid = (req, res, next)=>{
    try{
        const token = req.headers['secret-token'];
        jwt.verify(token, 'SecretToken')
        next()
    }catch (error){
res.status(402).send('no money, no honey :)')
    }
}

//user
app.post('/register', (req, res) => {
    console.log(req.body)
    const user = new User(req.body)
    user.save()
        .then(response => {
            res.json({
                response,
                message: 'user created'
            })
        })

})

//login route
app.post('/login', (req, res) => {
    const { username, password } = req.body
    User.findOne({ username })
        .then(user => {
            if (!user) {
                res.json({
                    message: "user not find"
                })
            }
            if (user.password !== password) {
                res.json({
                    message: "user or password is not correct"
                })
            }
            if (user.password === password) {
                const token = jwt.sign({
                    username,
                    userId: user._id,

                }, 'SecretToken', {
                    expiresIn: '1h'
                })
                res.json({
                    message: "user logged in",
                    token
                })
            }
        })
    //  res.json(req.body)
})


//posts
//endpoint creëren
app.get('/', (req, res) => {
    res.send('hello')
})
//webdevnov is dynamic
// app.get('/:webdevnov', (req, res)=>{
//     console.log(req.params)
//     //in insomnia /this-is-cool
//     //{webdevnov : "this is cool" }
// })


//get posts
app.get('/posts', isTokenValid, (req, res) => {

    // res.json({
    //for testing
    //     id: 1
    // })  

    console.log(req.query)
    if (req.query.id !== undefined) {
        //get single post
        Post.findById({ _id: req.query.id }, (err, post) => {
            if (err) {
                console.log(err)
            } else {
                res.json(post)
            }
        })
    } else {
        //get all posts
        Post.find({})
            .then(posts => {
                res.json(posts)
            })
    }
})

// //get single post
// // /:id = dynamic
////in insomnia localhost:1337/posts/6266570a7d394e1cfa9735ce
//// of localhost:1337/posts?id=6266570a7d394e1cfa9735ce
// app.get('/posts/:id', (req, res)=>{ //localhost/posts/4 > id
//    console.log(req.params)
//    const id = req.params.id
//    console.log(`id is ${id}`)
//    Post.findById({_id : id}, (err, post)=>{
//     if (err) {
//         console.log(err)
//     } else {
//         res.json(post)
//     }  
//    })
// })


//create new post
app.post('/posts', (req, res) => {
    const variablepost = new Post(req.body)
    variablepost.save()
        .then(response => {
            res.json(response)
        })
})


app.listen(1337, () => {
    console.log('listening...')
})