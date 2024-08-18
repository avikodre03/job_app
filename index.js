const express = require("express");
const mongoose = require("mongoose")
const dotenv = require("dotenv")

const jobRoutes = require("./routes/job");

const app = express()

dotenv.config();

app.use(express.json());

console.log(process.env.DB_CONNECTION_URL);


// mongoose.connect("mongodb://localhost:27017/jobapp")
// mongoose.connect("mongodb://127.0.0.1:27017/jobapp")
mongoose.connect(process.env.DB_CONNECTION_URL)
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