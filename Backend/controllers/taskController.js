const Task = require("../model/taskModel");


//Create a task
const createTask=async(req,res)=>{
    try {
        const task=await Task.create(req.body)
        res.status(200).json(task)
        
    } catch (error) {
        res.status(500).json({msg:error.message})
        
    }
};

//Get all Tasks
const getTasks=async(req,res)=>{
    try {
        const tasks=await Task.find() // to interect with database we have entry point MODEL and in case our model is Task which we have imported above
        res.status(200).json(tasks)
        
    } catch (error) {
        res.status(500).json({msg: error.message})
        
    }
};

//Get a Single task
const getTask=async(req,res)=>{
      // console.log(req.params);
    // res.send("Get single task");

    try {
        const{id}=req.params
        const task=await Task.findById(id)
        if(!task){
            return res.status(404).json(`No Task with id:${id}`)
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({msg:error.message});
    }
};
    
//Delete Task

const deleteTask=async(req,res)=>{

    try{
        const{id}=req.params
        const task=await Task.findByIdAndDelete(id)

        if(!task){
            return res.status(404).json(`No task with id:${id}`);
        }


        res.status(200).send("Task deleted")//here we used .send instead of json because here we dont want to send back data we have to only display messege

    }catch(error){
        res.status(500).json({msg:error.message});

    }

};

//Update Task

const updateTask=async(req,res)=>{
    try {
        const {id}=req.params
        const task=await Task.findByIdAndUpdate(
            {_id:id},req.body,{new:true,runValidators:true,
             }
        );
        if(!task){
            return res.status(404).json(`No task with id:${id}`);
        }
        res.status(200).json(task);

    } catch (error) {
        res.status(500).json({msg:error.message});
        
    }

};

  

module.exports={
    // createTask:createTask // IN ES6 IF WE HAVE SAME NAEM AND VALUE WE CAN GIVE ONLY NAME
    createTask,
    getTasks,
    getTask,
    deleteTask,
    updateTask,
};