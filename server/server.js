const express = require('express');
const path = require('path');
const parser = require('body-parser');
const router = require('./router/blockbuster.router');

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
app.use(express.static(path.join(__dirname, '../static')));
// define your routes

//After fleshing out exporting router, hook this up!!
// app.use('/api', router);
// set up your server to listen on your port of choice
const port = 3000;

app.listen(port, () => {
    console.log('Server is listening on port ', port);
});