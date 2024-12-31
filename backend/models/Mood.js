const mongoose = require('mongoose');

const moodSchema = mongoose.Schema(
    {
        mood: {
            type: String,
            required: true,
        },
        activity: {
            type: String,
            required: true,
        },
        date: {
            type: Date,
            default: Date.now,
        },
    },
    {
        timestamps: true, // Adds createdAt and updatedAt fields
    }
);

module.exports = mongoose.model('Mood', moodSchema);
