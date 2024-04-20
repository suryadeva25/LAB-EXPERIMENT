const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Grade = require('./models/gradeModel');
const Transcript = require('./models/transcriptModel');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/school', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => console.error('Error connecting to MongoDB:', err));


app.post('/grades', async (req, res) => {
    try {
        const grade = new Grade(req.body);
        await grade.save();
        res.json(grade);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


app.get('/grades', async (req, res) => {
    try {
        const grades = await Grade.find();
        res.json(grades);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


app.put('/grades/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updatedGrade = await Grade.findByIdAndUpdate(id, req.body, { new: true });
        res.json(updatedGrade);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


app.delete('/grades/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Grade.findByIdAndDelete(id);
        res.json({ message: 'Grade deleted successfully' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
