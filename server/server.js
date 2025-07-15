import "dotenv/config"
import express from "express"
import cors from "cors"
import connectdb from "./configs/mongodb.js"


const PORT = process.env.PORT || 4000
const app = express()


app.use(express.json())
app.use(cors())
await connectdb()

app.get("/",(req,res) => {
    res.send("api working baby")
})

app.listen(PORT,() =>{
    console.log(`server runinng in http://localhost:${PORT}`)
})