const express = require('express');
const router = express.Router();
const Mood = require('../models/Mood');

// POST: Add a new mood
router.post('/', async (req, res) => {
    const { mood, activity } = req.body;

    if (!mood || !activity) {
        return res.status(400).json({ message: 'Mood and activity are required' });
    }

    try {
        const newMood = await Mood.create({ mood, activity });
        res.status(201).json(newMood);
    } catch (error) {
        res.status(500).json({ message: 'Failed to save mood', error: error.message });
    }
});

// GET: Fetch all moods
router.get('/', async (req, res) => {
    try {
        const moods = await Mood.find();
        res.json(moods);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch moods', error: error.message });
    }
});

module.exports = router;
