const mongoose = require('mongoose')

// TODO: Add default values to the ones not required
const Company = new mongoose.Schema({
    startupName: {type:String, trim: true},
    founderName: {type:String, trim: true},
    industry: {type:String, trim: true},
    solution: {type:String, trim: true},
    startDate: {type:String, trim: true},
    endDate: {type:String, trim: true},
    failureReason: {type:String, trim: true},
    detailedStory: {type:String, trim: true},
    contact: {type:String, trim: true},
    date: {type: Date, default: Date.now }
})

module.exports = mongoose.model('Company', Company)