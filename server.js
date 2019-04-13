const express = require('express');
const app = express();
const path = require('path');
const {syncAndSeed, Campus, Student} = require('./db/index');

const port = process.env.PORT || 3000;

var bodyParser = require('body-parser')
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({ extended: true })); 

app.get('/app.js', (req, res, next)=> res.sendFile(path.join(__dirname, 'dist', 'main.js')));

app.get('/', (req, res, next)=> res.sendFile(path.join(__dirname, 'index.html')));


app.get('/api/campuses', (req, res, next) => {
    Campus.findAll()
      .then((campuses) => res.send(campuses))
      .catch(next)
});
  
app.get('/api/students', (req, res, next) => {
    Student.findAll()
      .then((students) => res.send(students))
      .catch(next)
});

app.get('/api/campus/:id', (req, res, next) => {
    const id = req.params.id;
    Campus.findByPk(id)
      .then((campus) => res.send(campus))
      .catch(next)
});

app.get('/api/student/:id', (req, res, next) => {
    const id = req.params.id;
    Student.findByPk(id)
      .then((student) => res.send(student))
      .catch(next)
});

app.post('/api/campus/', (req, res, next) => {
    console.log('post reached')
    Campus.create(req.body)
      .then((campus) => res.send(campus))
      .catch(next)
});

app.post('/api/student/', (req, res, next) => {
    Student.create(req.body)
      .then((student) => res.send(student))
      .catch(next)
});

app.delete('/api/campus/:id', (req, res, next) => {
    Campus.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(() => res.status(204).end())
    .catch(next)
});

app.delete('/api/student/:id', (req, res, next) => {
    console.log(req.params.id)
    Student.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(() => res.status(204).end())
    .catch(next)
})
  
syncAndSeed()
  .then(() => app.listen(port), () => console.log(`App is listening on ${port}`));
