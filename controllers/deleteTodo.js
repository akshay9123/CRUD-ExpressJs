const Todo = require('../models/todo');

exports.deleteTodo = async (req,res) =>{
    try{

        const {id} = req.params;

        await Todo.findByIdAndDelete(id)

        res.json(
            {
                success:true,
                message:"Data is deleted"
            }
        )
    }
    catch(err) {
        console.log(err)
        res.status(500).json(
            {
                success:false,
                data:"internal server issue",
                message:err.message,
            }
        )
    }
}