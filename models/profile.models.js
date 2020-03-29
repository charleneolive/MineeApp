
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    photoUrl:{type: String, required: true},
    firstName:{type: String, required: true},
    lastName:{type:String,required: true},
    gender:{type: String, required: true},
    occupation:{type:String, required: true},
    postalCode:{type:String,required:true},
    country:{type:String,required:true},
    dateOfBirth:{type:Date, required: true},
    nationality:{type:String,required:true},
    charityType:{type:String,required:true},
    interests:{type:String,required:true},
    files:{type:String,required:true},
    occupations:[{
        heading:{type:String,required:true},
        start_date:{type:String,required:true},
        end_date:{type:String,required:true},
        body:{type:String,required:true}
    }],
    education:[{
        heading:{type:String,required:true},
        start_date:{type:String,required:true},
        end_date:{type:String,required:true},
        body:{type:String,required:true}
    }],
    projects:[{
        heading:{type:String,required:true},
        start_date:{type:String,required:true},
        end_date:{type:String,required:true},
        body:{type:String,required:true}
    }]

},{
    timestamps: true,
})

const User = mongoose.model('User',userSchema);
module.exports = User;
