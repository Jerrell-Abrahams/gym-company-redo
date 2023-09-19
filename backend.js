const express = require("express")
const ejs = require("ejs")
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
const Schema = mongoose.Schema


const ConnectDb = async () => {
    const uri = "mongodb+srv://jerrellabrahams50:jerrell@cluster0.ynuopgk.mongodb.net/?retryWrites=true&w=majority";
    const options = {
        dbName: "gym-company-redo"
    }
    try {
        await mongoose.connect(uri, options, {useUnifiedTopology: true, useNewUrlParser: true})
    }catch (err) {
        console.error(err)
    }
}

const locationSchema = new Schema({
    name: String,
    address: String,
    phone: String,
    manager_name: String,
    manager_email: String,
    facilities: Array,
    gallery: Array,
    video: String,
    map: String
})

const joinSchema = new Schema({
    first_name: String,
    last_name: String,
    email: String,
    phone: String,
    id_number: String,
    gym: String
})




ConnectDb()


const app = express()
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }));


app.set("view engine", "ejs")

app.get("/", async function (req, res) {
    const locationModel = mongoose.model("locations", locationSchema, "locations")
    const data = await locationModel.find({}).exec()

    res.render("index", {locations: data})
})

app.get("/join", (req, res) => {
    
    res.render("join")
})

app.post("/join", async function(req, res) { 



    const joinModel = mongoose.model("joined", joinSchema, "joined")
    const data = await joinModel.collection.insertOne({
        first_name: req.body.fname,
        last_name: req.body.lname,
        email: req.body.email,
        phone: req.body.number,
        id_number: req.body.id,
        gym: req.body.gym
    })

    res.render("thank_you_page")
    
})

app.get("/group_fitness", (req, res) => {
    res.render("groupFitness", {title: "Group Fitness"})
})

app.get("/spa", (req, res) => {
    res.render("spa", {title: "SPA"})
})

app.listen(3000,  () => {
    console.log("listening on port 3000 and 192.168.100.7")
})