const db = require('./db')
const Campus = require('./models/Campus')
const Student = require('./models/Student')

const syncAndSeed = () => {
  return db.sync({force: true})
  .then(() => {
    Promise.all([
      Campus.create({name: 'Ohio University', address: ''}),
      Campus.create({name: 'Kent State University', address: ''}),
      Campus.create({name: 'Miami University', address: ''}),
      Campus.create({name: 'Ohio State University', address: ''})
    ])
    .then(() => {
      Promise.all([
        Student.create({firstName: 'Lauren', lastName: 'West', email: 'laurenwest12@gmail.com', gpa: 3.8, campusId: 1}),
        Student.create({firstName: 'Daniel', lastName: 'Holtzman', email: 'danielmholztman@gmail.com', gpa: 3.9, campusId: 3}),
        Student.create({firstName: 'Doug', lastName: 'Dale', email: 'daledoug6@gmail.com', gpa: 3.3, campusId: 4}),
        Student.create({firstName: 'Travis', lastName: 'Usher', email: 'trvsusher@gmail.com', gpa: 3.5, campusId: 2}),
        Student.create({firstName: 'Alex', lastName: 'Fishler', email: 'aefishler@gmail.com', gpa: 4.0, campusId: 1}),
      ])
    })
  })
  
}


Student.belongsTo(Campus, {as: 'campus'})
Campus.hasMany(Student)

module.exports = {
  db,
  syncAndSeed,
  Campus, 
  Student
}