// requiring router
const router = require('express').Router();
// requiring created model
let Opportunity = require('../models/opportunities.models');

// get a list of opportunities
router.get('/list',async(req, res) => {
  try {
    const opportunity= await Opportunity.find({});
    return res.json({
      opportunity
    });
  } catch (error) {
    return res.status(500).json({
      message:'Internal Server Error'
    })
  }
});

router.post('/add', async(req,res)=> {
  if(isEmpty(req.body)) {
    return res.status(403).json({
      message:"Body should not be empty",
      statusCode:403
    })
  }
  const {name, category,description,starting_date,ending_date}=req.body;

  const newOpportunity = new Opportunity({
    name,
    category,
    description,
    starting_date,
    ending_date
  });
  try{
    await newOpportunity.save();
    res.json({
      message:"Data successfully saved",
      statusCode:200,
      name,
      category,
      description,
      starting_date,
      ending_date
    })
  } catch (error) {
    console.log('Error: ', error);
    res.status(500).json({
      message:"Internal Server error",
      statusCode:500
    })
  }
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