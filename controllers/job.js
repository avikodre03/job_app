const jobModel = require("../models/job")

const createJob = async (req, res) => {

    try {
        const jobObj = req.body;
        const newJob = new jobModel(jobObj);
        const newSaveJobs = await newJob.save();
        console.log(newJob);

        res.json({
            success: true,
            message: "Job created successfully",
            jobId: newSaveJobs._id
        })
    } catch (error) {
        res.json({
            success: false,
            message: "something went wrong, please try again after sometime"
        })
    }

}

const listJob = async (req, res) => {
    try {
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
    } catch (error) {
        res.json({
            success: false,
            message: "something went wrong, please try again after sometime"
        })
    }


}

const editjob = async (req, res) => {
    try {
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
    } catch (error) {
        res.json({
            success: false,
            message: "something went wrong, please try again after sometime"
        })
    }

}

const deleteJob = async (req, res) => {
    try {
        const jobId = req.params.id;
        await jobModel.findByIdAndDelete(jobId)
        // jobModel.findOneAndDelete()
        // jobModel.deleteMany()
        res.json({
            success: true,
            message: "delete job"
        })
    } catch (error) {
        res.json({
            success: false,
            message: "something went wrong, please try again after sometime"
        })
    }


}

const jobController = {
    createJob,
    listJob,
    editjob,
    deleteJob
}

module.exports = jobController;