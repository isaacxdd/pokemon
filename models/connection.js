const dotenv = require("dotenv")
const mongoose = require("mongoose")

// Import .env variables, leads them into process.env

dotenv.config()

// save the DATABASE_URL variable into its own variables
const DATABASE_URL= process.env.DATABASE_URL

// connect our database
mongoose.connect(DATABASE_URL, {})

// connection message;
mongoose.connection
.on("open", ()=>{console.log("mongoose is connected")})
.on("close", ()=>{console.log("mongoose is Disconnected")})
.on('error', (error)=>{ console.log(console.log(error))})

// export already connected mogoose file
module.exports = mongoose