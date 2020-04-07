const express = require('express'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  passport = require('passport'),
  users = require('./routes/api/users'),
  app = express()

//BodyParser Middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)
app.use(bodyParser.json())

//DataBase Configuration

const db = require('./config/keys').mongoURL
//Connect to DataBase Atlas

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database successfully Connected'))
  .catch(err => console.log(err))

//Passport MiddleWare
app.use(passport.initialize())

//Passport Config
require('./config/passport')(passport)

//Routes
app.use('/api/users', users)

const port = 2000
app.listen(port, () => {
  console.log("Server's On Bruh!!!")
})
