const db = require('./db');
const Campus = require('./models/Campus');
const Student = require('./models/Student');

const syncAndSeed = () => {
  return db.sync({ force: true }).then(() => {
    Promise.all([
      Campus.create({
        name: 'Hypnotic Donuts University',
        address: 'Dallas, TX',
        imageUrl:
          'https://s3-media2.fl.yelpcdn.com/bphoto/0ds2Lk7ZdbX9wx1zgyvZIw/o.jpg',
        description:
          'Unique varieties of artisan donuts & chicken biscuits offered in a laid-back, strip-mall setting.'
      }),
      Campus.create({
        name: 'Academy of District Donuts Sliders Brew',
        address: 'New Orleans, LA',
        imageUrl:
          'https://s3-media3.fl.yelpcdn.com/bphoto/8DXE2l5wYld9ovGQjSpjkg/o.jpg',
        description:
          'Comfy cafe offering caffeinated drinks, little burgers & sweets in a rustic-chic ambiance.'
      }),
      Campus.create({
        name: "Stan's Donuts & Coffee State University",
        address: 'Chicago, IL',
        imageUrl:
          'https://s3-media3.fl.yelpcdn.com/bphoto/i2F-gqjfC3ySkf378nToPg/o.jpg',
        description:
          'Stylish spot supplying gourmet donuts, gelato & coffee drinks brewed from La Colombe beans.'
      }),
      Campus.create({
        name: 'Donut Friend College',
        address: 'Los Angeles, CA',
        imageUrl:
          'https://s3-media1.fl.yelpcdn.com/bphoto/ZvHyCX22FVPpSRdT8XYwUw/o.jpg',
        description:
          'Colorful, compact shop offering made-to-order donuts with variety of sweet & savory flavor options.'
      }),
      Campus.create({
        name: "Academy of Beiler's Donuts",
        address: 'Philadelphia, PA',
        imageUrl:
          'https://s3-media4.fl.yelpcdn.com/bphoto/vzCfZZHvJ458wsxg7KQwRQ/o.jpg',
        description:
          'Destination for baked goods, including Pennsylvania Dutch classics & a variety of housemade donuts.'
      }),
      Campus.create({
        name: 'University of Dough',
        address: 'New York, NY',
        imageUrl:
          'https://s3-media4.fl.yelpcdn.com/bphoto/9e_IKW3-ejVratfRGkpbMg/o.jpg',
        description:
          'Lively corner shop for housemade donuts with inventive glazes & fillings plus French-press coffee.'
      })
    ]).then(([c1, c2, c3, c4, c5, c6]) => {
      Promise.all([
        Student.create({
          firstName: 'Zoo',
          lastName: 'Ropa',
          email: 'zoo-ropa@hypnotic.edu',
          gpa: 3.8,
          imageUrl:
            'https://s3-media2.fl.yelpcdn.com/bphoto/AY5hb12JD_KpW2hHN_Uu7w/o.jpg',
          campusId: c1.id
        }),
        Student.create({
          firstName: 'Turtle',
          lastName: 'Cheesecake',
          email: 'tutle-cheesecake@district.edu',
          gpa: 3.9,
          imageUrl:
            'https://s3-media1.fl.yelpcdn.com/bphoto/ucneFF6DlrTn5RGIllp_aA/o.jpg',
          campusId: c2.id
        }),
        Student.create({
          firstName: 'Biscoff Banana',
          lastName: 'Pocket',
          email: 'bbiscoff@stans.edu',
          gpa: 3.3,
          imageUrl:
            'https://s3-media2.fl.yelpcdn.com/bphoto/aTpJyaGia9t2BoduCuWJKg/o.jpg',
          campusId: c3.id
        }),
        Student.create({
          firstName: "S'Morrissey",
          lastName: 'Donut',
          email: 'smorris@donutfriend.edu',
          gpa: 3.5,
          imageUrl:
            'https://s3-media2.fl.yelpcdn.com/bphoto/tHoZ1H5P1resXusGn1FGHA/o.jpg',
          campusId: c4.id
        }),
        Student.create({
          firstName: 'Oreo',
          lastName: 'Donut',
          email: 'oreo@beilers.edu',
          gpa: 4.0,
          imageUrl:
            'https://s3-media3.fl.yelpcdn.com/bphoto/cbJfhxTovrMUw99HVMkavw/o.jpg',
          campusId: c5.id
        }),
        Student.create({
          firstName: 'Ducle',
          lastName: 'de Leche',
          email: 'dleche@doughny.edu',
          gpa: 2.5,
          imageUrl:
            'https://s3-media4.fl.yelpcdn.com/bphoto/DL19ur_QB26x0Yt5rqw5mw/o.jpg',
          campusId: c6.id
        })
      ]);
    });
  });
};

Student.belongsTo(Campus, { as: 'campus' });
Campus.hasMany(Student);

module.exports = {
  db,
  syncAndSeed,
  Campus,
  Student
};
