const express = require('express');
const app = express();
const path = require('path');
const {syncAndSeed, Campus, Student} = require('./db/index');

const port = process.env.PORT || 3000;

app.get('/app.js', (req, res, next)=> res.sendFile(path.join(__dirname, 'dist', 'main.js')));

app.get('/', (req, res, next)=> res.sendFile(path.join(__dirname, 'index.html')));


app.get('/api/campuses', (req, res, next) => {
    Campus.findAll()
      .then((campuses) => res.send(campuses))
      .catch(next)
  })
  
  app.get('/api/students', (req, res, next) => {
    Student.findAll()
      .then((students) => res.send(students))
      .catch(next)
  })
  
  syncAndSeed()
    .then(() => app.listen(port), () => console.log(`App is listening on ${port}`))
