const jobModel = require("../models/job")

const createJob = async (req, res) => {
    const jobObj = req.body;
    const newJob = new jobModel(jobObj);
    const newSaveJobs = await newJob.save();
    console.log(newJob);

    res.json({
        success: true,
        message: "Job created successfully",
        jobId: newSaveJobs._id
    })
}

const listJob = async (req, res) => {
    const minSalary = req.query.minSalary
    const maxSalary = req.query.maxSalary
    const jobList = await jobModel.find({
        $and: [
            { salary: { $gte: minSalary } },
            { salary: { $lte: maxSalary } }
        ]

    });
    console.log(jobList);

    res.json({
        success: true,
        message: "listJob job",
        results: jobList,
    })
}

const editjob = async (req, res) => {
    const jobId = req.params.id;
    console.log(jobId);
    console.log(req.body);

    // Model.findByIdAndUpdate(_Id to find record,fields data to update)
    const updatedata = await jobModel.findByIdAndUpdate(jobId, req.body)
    console.log(updatedata);

    res.json({
        success: true,
        message: "job updated succefully"
    })
}

const deleteJob = async (req, res) => {
    const jobId = req.params.id;
    await jobModel.findByIdAndDelete(jobId)
// jobModel.findOneAndDelete()
// jobModel.deleteMany()
    res.json({
        success: true,
        message: "delete job"
    })
}

const jobController = {
    createJob,
    listJob,
    editjob,
    deleteJob
}

module.exports = jobController;