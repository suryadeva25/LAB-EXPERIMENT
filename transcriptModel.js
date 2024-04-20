const mongoose = require('mongoose');

const transcriptSchema = new mongoose.Schema({
    grades: [{
        subject: String,
        score: Number
    }],
    // Add more fields as needed
});

const Transcript = mongoose.model('Transcript', transcriptSchema);

module.exports = Transcript;
