const mongoose = require('mongoose')

var userSchem = new mongoose.Schema({
username:{
    type: String,
    required : true,
    unique: true
},
password: {
    type: String,
    required: true
},
adres : {
      straat :{
        type: String,
        required: true
    },
    nummer: {
        type: Number,
        required: true
    },
    postcode:{
        type: Number,
        required: true
    },
    plaatsnaam:{
        type: String,
        required: true
    }}
})

module.exports = mongoose.model('users', userSchem)