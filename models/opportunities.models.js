
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const opportunitiesSchema = new Schema({
    name:{type: String, required: true},
    category:{type:String,required: true},
    description:{type: String, required: true},
    starting_date:{type:Date, required: true},
    ending_date:{type:Date,required:true},

},{
    timestamps: true,
})

const Opportunity = mongoose.model('Opportunity',opportunitiesSchema);
module.exports = Opportunity;
