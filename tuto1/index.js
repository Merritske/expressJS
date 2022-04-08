const express = require('express');
var bodyParser = require('body-parser')
//create webserver from express
//express is voor backend en frontend
const app = express();
const admin = express()

app.use(bodyParser.json())
// "/" is root op welke webpage zit de user
//request wat vraagt user
    //na enteren van de link
//response to user
app.get('/', (req, res)=>{
//res.send("<h1>Hello ExpressJS </h1>") //html tags are allowed = frontend
res.json({ //backend
    articles:[{
        id:1,
        title: "Hello",
        body: "lorem ipsum"
    }]
})
})

app.post('/', (req, res)=>{
    console.log(req.body)
    console.log(req.query)
    res.json(
       req.body
    )
})



admin.get('/', (req, res)=>{
   res.send("<h1>hello admin</h1>")
})

//app en admin runnen op verschillende poort
app.listen(4000, ()=>{
    console.log('webserver is runnning')
})
admin.listen(4001, ()=>{
    console.log("server runs")
})
