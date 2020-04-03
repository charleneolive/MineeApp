// need express router because it is a route that is being created
const router = require('express').Router();
// requiring the mongoose model
let User = require('../models/profile.models');

// this is the first route. a get request route('/users/')
// if it is a get request, then get a list of all information from database
// router.route('/').get((req, res) => {
//   User.find() 
// //   then get all the users in json format
//     .then(user => res.json(user))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

// route('/users/add')
router.route('/add').post((req, res) => {
  const photoUrl = req.body.photoUrl;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const gender = req.body.gender;
  const occupation = req.body.occupation;
  const postalCode = req.body.postalCode;
  const country = req.body.country;
  const dateOfBirth = req.body.dateOfBirth;
  const nationality = req.body.nationality;
  const charityType = req.body.charityType;
  const interests = req.body.interests;
  const files = req.body.files;
  const occupations = req.body.occupations;
  const education = req.body.education;
  const projects = req.body.projects;
// create a new instance of user using the username
  const newUser = new User(
    {  
    photoUrl,
    firstName,
    lastName,
    gender,
    occupation,
    postalCode,
    country,
    dateOfBirth,
    occupation,
    nationality,
    charityType,
    interests,
    files,
    occupations,
    education,
    projects
  }
);
// after saving the user to the mongoDB database
  newUser.save()
//   return the message 
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json('User deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  User.findById(req.params.id)
    .then(user => {
      user.photoUrl = req.body.photoUrl;
      user.firstName = req.body.firstName;
      user.lastName = req.body.lastName;
      user.gender = req.body.gender;
      user.occupation = req.body.occupation;
      user.postalCode = req.body.postalCode;
      user.country = req.body.country;
      user.dateOfBirth = Date.parse(req.body.dateOfBirth);
      user.nationality = req.body.nationality;
      user.charityType = req.body.charityType;
      user.interests = req.body.interests;
      user.files = req.body.files;
      user.occupations = req.body.occupations;
      user.education = req.body.education;
      user.projects = req.body.projects;

      user.save()
        .then(() => res.json('User updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;