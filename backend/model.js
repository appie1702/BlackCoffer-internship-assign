const mongoose = require('mongoose');

const infoModel = mongoose.Schema(
    {
        end_year: {type: Number, required: false},
        intensity: {type: Number, required: false},
        sector: {type: String, required: false},
        topic: {type: String, required: false},
        insight: {type: String, required: false},
        url: {type: String, required: false},
        region: {type: String, required: false},
        start_year: {type: Number, required: false},
        impact: {type: String, required: false},
        added: {type: String, required: false},
        published: {type: String, required: false},
        country: {type: String, required: false},
        relevance: {type: Number, required: false},
        pestle: {type: String, required: false},
        source: {type: String, required: false},
        title: {type: String, required: false},
        likelihood: {type: Number, required: false},
})

const Info = mongoose.model("Info", infoModel);
module.exports = Info;