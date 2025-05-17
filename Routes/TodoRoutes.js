import express from "express"
import Todo from "../Schema/Todo.js";

const router = express.Router();


router.get("/" ,async (req , res)=>{

    try {
       
        const tasks = await Todo.find({})
       res.status(201).send(tasks)
       console.log("success in fetching data")
    } catch (error) {
        console.log("error in getting data")
        res.status(401).send({message : "error task not found"})
    }


})

router.post("/" ,async (req , res)=>{
try {
    const {task} = req.body;
    const newTodo = await new Todo({task})
    newTodo.save();
    res.send({message : "todo is saved"})
} catch (error) {
    res.status(401).send({message: "cannot able to update"})
}
})

router.delete("/:id" ,async (req , res)=>{
try {
   const {id} = req.params;

   await Todo.findByIdAndDelete(id);
   res.status(201).send({message:"deleted successfully"})
   
} catch (error) {
    console.log("error" , error)
    res.status(401).send({message:"it is not able to delete"})
}
})





export default router
