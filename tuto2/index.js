const express = require("express");
var bodyParser = require("body-parser"); //middleware = between requestdata and responsedata
const cors = require("cors"); //middleware
const cheerio = require("cheerio"); //DOM object maken
const axios = require('axios').default //get request

const app = express();

app.use(cors())
app.use(bodyParser.json())

//first is endpoint, second = function om userdata te lezen
//res.send is html response dat je wil verzenden
//res.json is data dat je wil sturen => localhost:4000 toont het json-file
app.get('/', (req, res)=>{
    axios.get('https://www.bbc.com/news')
    .then(newsRes => newsRes.data)
    .then(data=>{
       //data uploaden, bepaalde sectie zoeken van de nieuwssite
        const $ = cheerio.load(data)
       // const getAllNews = $('.SectionPage__rightBlock')
        // console.log(getAllNews.html())  de html wordt getoond in de console
        // console.log(getAllNews.children().html())

const getAllNews = $('.gs-c-promo.nw-c-promo')


//
linkAtt = getAllNews.find('.gs-c-promo-heading__title').first()
 
  
        console.log(linkAtt.first().text())






const getImage = getAllNews.find('.gs-c-promo-image').first().first().find('img')

  // console.log(getImage.attr('src'))

       res.json({
title: linkAtt.text(),
image: getImage.attr('src')
    })
    })

} )

//
app.listen(4000, ()=>{
    console.log("server running...")
})