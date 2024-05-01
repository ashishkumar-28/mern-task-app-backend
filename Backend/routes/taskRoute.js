const express=require("express");
const Task=require("../model/taskModel");
const { 
    createTask, 
    getTasks, 
    getTask,
    deleteTask,
    updateTask,
 } = require("../controllers/taskController");
const router=express.Router() 

//Create a Task

// router.post("/api/tasks",createTask);

//HERE WE WILL NOT USE BELOW CODE BECAUSE WE CREATED SEPERATE FILE TASKCONTROLLER.JS FOR ALL THE CALL BACK FUNCTIONS
// router.post("/api/tasks",async(req,res)=> {
//     // console.log(req.body)
//     // res.send("Task Created")

//     //Now here we will store data to database
//     try {
//         const task=await Task.create(req.body)
//         res.status(200).json(task)
        
//     } catch (error) {
//         res.status(500).json({msg:error.message})
        
//     }
// });

// Get/Read Tasks

// router.get("/api/tasks",getTasks);
// router.get("/api/tasks",async(req,res)=>{
//     try {
//         const tasks=await Task.find() // to interect with database we have entry point MODEL and in case our model is Task which we have imported above
//         res.status(200).json(tasks)
        
//     } catch (error) {
//         res.status(500).json({msg: error.message})
        
//     }
// });

// Here we will not use /api/tasks because it is common in every router so we directly import it in server.js
// router.get("/api/tasks/:id",getTask);
// router.delete("/api/tasks/:id",deleteTask);
// // router.put("/api/tasks/:id",updateTask);
// router.patch("/api/tasks/:id",updateTask);


router.post("/",createTask);
router.get("/",getTasks);
router.get("/:id",getTask);
router.delete("/:id",deleteTask);
router.put("/:id",updateTask);

//f0r first 2 we can use this also
// router.route("/").get(getTasks).post(createTask);
// router.route("/:id").get(getTask).delete(deleteTask).put(updateTask);


module.exports=router;//we will use it in server.js i.e we are exporting