//import modules
const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;


//middleware
app.use(bodyParser.json());
app.use(cors());

//create routing
app.get("/", (req, res)=>{
    res.send('Example restAPI')
})

app.get("/posts", (req, res)=>{
    res.json({
        id:1,
        title: "blablabla",
        body: "some more blabla"
    })
})




//set listener
app.listen(port, ()=>{
    console.log(`listen on port ${port}`)
})