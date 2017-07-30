const express = require('express');
const path = require('path');
const parser = require('body-parser');
const router = require('./router/blockbuster.router');
const mongoose = require('mongoose');
const db = require('../db/config.js');
let Movie = require('../db/models/movieModel.js')

//TODO: fill this page in!

// require your dependencies

// create an instance of your express server
const app = express();

// depending on which front end framework you're using, 
// serve your static files
//app.use()
// add middleware
app.use(parser.json());
app.use(parser.urlencoded( { extended: true }));
app.use(express.static(path.join(__dirname, '../react-client')));
// define your routes

//After fleshing out exporting router, hook this up!!
app.use('/api', router);
// set up your server to listen on your port of choice
const port = 3000;

app.listen(port, () => {
    console.log('Server is listening on port ', port);
});

// let harold = new Movie({
//     title: "Harold and Kumar",
//     copies: 500000000,
//     rating: 10,
// })
// harold.save((err, harold) => {
//   if(err) return console.error(err);
//   console.log(`saved ${harold.title}`);
// }); 

// let dragonBall = new Movie({
//     title: "DragonBallZ",
//     copies: 1234567890,
//     rating: 9000,
// })
// dragonBall.save((err, dragonBall) => {
//   if(err) return console.error(err);
//   console.log(`saved ${dragonBall.title}`);
// });

// let senToChihiro = new Movie({
//     title: "Spirited Away",
//     copies: 0,
//     rating: 11,
// })
// senToChihiro.save((err, senToChihiro) => {
//   if(err) return console.error(err);
//   console.log(`saved ${senToChihiro.title}`);
// });
