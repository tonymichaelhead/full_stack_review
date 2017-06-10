# Welcome to Blockbuster!

In this fullstack review application, we will be bringing Blockbuster back from the dead. You will be setting up a server and a database, creating a RESTful API for their movie inventory, and rendering views on the front end to see the data. 

## Tech Stack
* Express
* MySQL
* Sequelize
* React / Angular

## Task
Go through the file structure and fill in the "TODO"s throughout the application

## To Do List:

**Try to build the app without looking at this todo list, but if you're feeling lost at what direction to go, go ahead and look at this list to guide you**

1. Set up a server and get it to serve up a static file (depending on your front end framework of choice, make sure it's pointing to the right folder)
2. Set up a database; the solution code will use Sequelize but feel free to choose whichever ORM you wish. 
  Your movies table should include the following information:
    * Title
    * Number of Copies
    * IMDB Rating
3. Write routes and controllers for your server to interact with your database. Use Postman to test your routes; At minimum, you want to:
    * Post a movie to the database
    * Get all movies to the database
4. Render front end components to utilize your routes. 
    * A view to see all the movies in the database
    * A view to submit information to post information to the database
5. Style!

## Extra
This review only covers barebones concepts. If you'd like, feel free to build on top of it, for example:
* add put and delete routes
* create functionality for users and add relationship between users and movies (i.e. so that users can eventually "check" movies out)
* add routes and more front end components to interact with user routes
* add authentication
* write tests!
