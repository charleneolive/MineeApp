// requiring router
const router = require('express').Router();
// requiring created model
let Opportunity = require('../models/opportunities.models');

// get a list of opportunities

router.route('/list').get((req, res) => {
  Opportunity.find() 
//   then get all the opportunities in json format
    .then(opporunity => res.json(opportunity))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res)=>{
  const {name, category,description,starting_date,ending_date}=req.body;
  const newOpportunity = new Opportunity({
    name,
    category,
    description,
    starting_date,
    ending_date
  });
  newOpportunity.save()
    .then(()=> res.json('User added'))
    .catch(err=> res.status(400).json('Error'+err))

})


// '/:id' is a variable
router.route('/:id').get((req, res) => {
  Opportunity.findById(req.params.id)
    .then(opportunity => res.json(opportunity))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Opportunity.findByIdAndDelete(req.params.id)
    .then(() => res.json('Opportunity deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Opportunity.findById(req.params.id)
    .then(opportunity => {
      opportunity.name = req.body.name;
      opportunity.category = req.body.category;
      opportunity.description = req.body.description;
      opportunity.starting_date = Date.parse(req.body.starting_date);
      opportunity.ending_date = Date.parse(req.body.ending_date);

      opportunity.save()
        .then(() => res.json('Opportunity updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;