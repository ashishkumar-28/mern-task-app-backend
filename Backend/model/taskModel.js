const mongoose=require("mongoose")

//its is schema skeleton structure means how the data willorganize before its store in database
const taskSchema=mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,"Please add a task"]
        },
        completed:{
            type:Boolean,
            required:true,
            default:false
        },
    },
    {
        timestamps:true, //it will automatic add time when we created or updated database
    }
);

const Task=mongoose.model("Task",taskSchema)

module.exports=Task;