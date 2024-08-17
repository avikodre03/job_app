const mongoose = require("mongoose")

const jobsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    salary: {
        type: Number,
        require: false,
        default:0
    },
})

const jobModel = mongoose.model("jobs", jobsSchema)

module.exports = jobModel;