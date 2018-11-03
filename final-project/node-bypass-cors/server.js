const express = require('express')
const axios = require('axios')

const app = express()

app.use(express.static('public'))

const API_KEY = '9840062fcd7aa695142761c413cf9a88'
const DARKSKY_URL = 'https://api.darksky.net/forecast/' + API_KEY + '/37.8267,-122.4233'

app.get('/', function(req, res) {
  res.send('index.html')
})

app.get('/weather', function(req, res) {
  console.log('Getting Weather!')
  axios.get(DARKSKY_URL)
    .then(function(response) {
      res.send(JSON.stringify(response.data))
    })
})

app.listen(1337, function() {
  console.log('The server is up and running on localhost:1337')
})
