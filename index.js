const express = require('express')

const youtubeTags = require('youtube-tags')

const fs = require('fs')

const bodyParser = require('body-parser')

var getYouTubeID = require('get-youtube-id');

const app = express()

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended:false}))

const PORT = 4000

app.get('/',(req,res) => {
    res.sendFile(__dirname + "/index.html")
})

app.post('/tagfinder',async (req,res) => {
    // extract the video id

    var url = req.body.url

    var id = getYouTubeID(url);

    console.log(id)

    // get the tags of the youtube video

    var tags = await youtubeTags.getYoutubeTags(id)
    
    res.send(tags)

    fs.writeFileSync("file.txt",content,(err) => {
        if(err) throw err
        
    })
})

app.listen(PORT,() => {
    console.log(`App is listening on Port ${PORT}`)
})