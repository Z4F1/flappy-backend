const mongoose = require("mongoose");
const { Schema } = mongoose;

const scoreSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

const ScoreModel = mongoose.model("Score", scoreSchema);

module.exports = ScoreModel;
