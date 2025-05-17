import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import TodoRoutes from "./Routes/TodoRoutes.js"
import dotenv from "dotenv"

dotenv.config();

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

app.use("/todo", TodoRoutes)


;(  async ()=>{
try {
  await  mongoose.connect(process.env.MONGO_URI)
  console.log("MONGODB connected")
    app.on("error" , (error) =>{
        console.log(error)
        throw error
    })

} catch (error) {
    console.log("connection error" , error)
}
})()


app.listen(port , () =>{
    console.log(`App is runnning on port ${port}`)
})