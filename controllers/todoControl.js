const TodoModel = require("../models/todoModels")

module.exports.getTodo = async (req,res)=>{
    try {
        const todo = await TodoModel.find({})
        return res.send(todo)
    }
    catch(err) {
        console.log(err)
    }
}

module.exports.saveTodo = async (req,res)=>{
    try {
        const {item} = req.body
        TodoModel
            .create({item})
            .then((data)=>{
                console.log("Added Successfully....")
                res.send(data)
            })
    }
    catch(err) {
        console.log(err)
    }
}

module.exports.updateTodo = async (req,res)=>{
    try {
        const {_id,item} = req.body;
        TodoModel
            .findByIdAndUpdate(_id,{item})
            .then(()=>res.send("Updated successfully"))
    }
    catch(err) {
        console.log(err)
    }
}

module.exports.deleteTodo = async (req,res)=>{
    try {
        const {_id} = req.body;
        TodoModel
            .findByIdAndDelete(_id)
            .then(()=>res.send("Deleted successfully"))
    }
    catch(err) {
        console.log(err)
    }
}