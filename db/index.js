const db = require('./db')
const Campus = require('./models/Campus')
const Student = require('./models/Student')

const syncAndSeed = () => {
  return db.sync({force: true})
  .then(() => {
    Promise.all([
      Campus.create({name: 'Ohio University', address: 'Athens, OH', imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipOdY82EjHoBYWp0OEkjA0jcMU2zPUgXxQwewTx3=w284-h160-k-no', description: 'Ohio University is a public research university in Athens, Ohio. The first university chartered by an Act of Congress and the first to be chartered in Ohio, it was chartered in 1787 by the Congress of the Confederation and subsequently approved for the territory in 1802 and state in 1804, opening for students in 1809.'}),
      Campus.create({name: 'Kent State University', address: 'Kent, OH', imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipNbGhtUN9qusMW75caqnXcpKOK8xQI8odfpHN53=w213-h160-k-no', description: 'Kent State University is a public research university in Kent, Ohio. The university also includes seven regional campuses in Northeast Ohio and additional facilities in the region and internationally.'}),
      Campus.create({name: 'Miami University', address: 'Miami, OH', imageUrl: 'https://lh3.googleusercontent.com/proxy/RP7c3Ezb6m-fwu7J14Q0fEDx8bKubX0lLrQPrCMlbhUKezX5Un9VFPdAbcwVCmpFUhTgA3fs6jiGACHVflu87G0bQqhe9wfyI7I7_AdSCkxyNWMv-_97USLFb2o9G4BPszTfcpDeKOIENbDsAbTWZuPH9t_Qkaw=w227-h144-k-no', description: 'Miami University is a public research university in Oxford, Ohio, United States. The university was founded in 1809, although classes were not held until 1824. Miami University is the second-oldest university in Ohio and the 10th oldest public university in the United States.'}),
      Campus.create({name: 'Ohio State University', address: 'Columbus, OH', imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipNqHAnVZ6vPu7DoUS-Xq2PO1JzINc8BPWJwkl-G=w318-h160-k-no', description: 'The Ohio State University, commonly referred to as Ohio State or OSU, is a large public research university in Columbus, Ohio. Founded in 1870 as a land-grant university and the ninth university in Ohio with the Morrill Act of 1862, the university was originally known as the Ohio Agricultural and Mechanical College.'})
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