const mongoose = require('mongoose');

const gradeSchema = new mongoose.Schema({
    subject: String,
    score: Number
});

const Grade = mongoose.model('Grade', gradeSchema);

module.exports = Grade;
