const express = require("express")
const app = express()

app.use(express.static("client"))

// upon recieving the post request, get the string
// split string in to seperate letters
// remove any spaces or commas

// problem 1
// how many words are possible from any number of given letters
// get all those words 

// problem 2 
// check if they exist in dict
// check each word in dictionary, dict can be an object with words as
// keys with boolean values
// if it exist in dict, store it in an object for response
// find all such words that exist in dict and return the response

app.post('/submit', function (req, res) {
  res.send("hello world")
})

app.listen('4300', function () {
  console.log('app is listeing on port 4300')
})

