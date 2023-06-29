const express = require("express")
const mongoose = require("mongoose")
const routes = require("./routes/todoRoutes")
const bodyParser = require('body-parser')
const cors = require("cors")

require("dotenv").config()

const port = process.env.PORT;
const dbURL = process.env.MONGODB_URL;

const app = express()
const dbConnection = async()=>{
    await mongoose.connect(dbURL)
}
dbConnection().then(()=>console.log("database connected...")).catch((err)=>console.log(err))
app.use(express.json())
app.use(cors())
app.use(routes)

app.listen(port,()=>{
    console.log(`Server is running at ${port}`)
})
