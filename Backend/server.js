const dotenv = require("dotenv").config();
const express=require("express");
const connectDB=require("./config/connectDB");
const mongoose=require("mongoose");
const Task = require("./model/taskModel");
const taskRoutes=require("./routes/taskRoute");
const cors=require("cors");
const app=express();



//Middleware- the function that have access of req,res and next object

app.use(express.json()); //express middleware
//by using above express middleware we can acees the body data

app.use(express.urlencoded({extended:false}));

//it will connect backend with frontend
// app.use(cors({
//     origin: ["http://localhost:3000/"]
// }))

//To connect with any link we use
app.use(cors({
    origin:["http://localhost:3000","http://mern-task-app.onrender.com"]   //it will allow to request comping from this url only
}));
app.use("/api/tasks",taskRoutes);

// const logger=(req,res,next)=>{
//     console.log("Middleware ran")
//     console.log(req.method);
//     next()
// };



//Routes
app.get("/",(req,res)=>{
    res.send("Home Page");
});

// //Create a Task - our server.js file will be big so we created seperate file for routes
// app.post("/api/tasks",async(req,res)=> {
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

// // Get/Read Tasks
// app.get("/api/tasks",async(req,res)=>{
//     try {
//         const tasks=await Task.find() // to interect with database we have entry point MODEL and in case our model is Task which we have imported above
//         res.status(200).json(tasks)
        
//     } catch (error) {
//         res.status(500).json({msg: error.message})
        
//     }
// })

// here logger we inserted to acees all the data here logger is middleware
// app.post("/api/tasks",logger,async(req,res)=> {
//     console.log(req.body)
//     res.send("Task Created")
// })

const PORT=process.env.PORT || 5000;

//Second way to connect with mongo db and start the server
mongoose
.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server running on port ${PORT}`);
    });
})
.catch((err)=>console.log(err));



//First way to connect with mongo db and start the server
// const startServer=async()=>{
//     try{
//         await connectDB();

//         app.listen(PORT,()=>{
//             console.log(`Server is running on port ${PORT}`);
//         });
        
//     }catch(error){
//         console.log(error);
//     }

// };

// startServer();