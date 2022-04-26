const mongoose = require('mongoose');

//create schema
var userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: false
    }
})

module.exports = mongoose.model('user', userSchema)

//"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkFOS0VBTCIsInVzZXJJZCI6IjYyNjY2OTkxNGVkMTdkZTIwYTQ3N2QzMyIsImlhdCI6MTY1MDg3OTgzOCwiZXhwIjoxNjUwODgzNDM4fQ.NW1DmsCWux49pMcGP1qefVdDhaLSOiOiAAV0c-Wk_dU"