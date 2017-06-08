const User = require('./models/userModel')
const Movie = require('./models/movieModel')
const Snack = require('./models/snackModel')

User.sync({ force: true })
Movie.sync({ force: true })
Snack.sync({ force: true })
