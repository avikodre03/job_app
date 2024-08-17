const express = require("express");
const mongoose = require("mongoose")

const jobRoutes = require("./routes/job");

const app = express()

app.use(express.json());

// mongoose.connect("mongodb://localhost:27017/jobapp")
// mongoose.connect("mongodb://127.0.0.1:27017/jobapp")
mongoose.connect("mongodb+srv://akodre111:ZAWGU09em5G74P0q@jobapp.4axhi.mongodb.net/")
    .then(() => {
        console.log("connect db");
    })
    .catch((err) => {
        console.log("Error db", err);

    })

app.use(jobRoutes)

app.listen(8080, () => {
    console.log("server runnng");

})