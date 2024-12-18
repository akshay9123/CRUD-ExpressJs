const Todo = require('../models/todo');

exports.getTodo = async(req,res) => {
    try{
       const todos = await Todo.find({});

       res.status(200).json(
        {
            success:true,
            data:todos,
            message:"Entire todo data is fetched"
        }
       )
    }

    catch(err){
        console.log(err)
        res.status(500).json(
            {
                success:false,
                
                message:"Entire todo data is not fetched"
            }
           )
    }
}


exports.getTodoById = async(req,res) =>{


    try{
    //    extract todo basis on id

        const id = req.params.id;

        const todo = await Todo.findById( {_id : id})

        if(!todo){
            return res.status(404).json(
                {
                    success:false,
                    message:"Not found the data"
                }
            )
        }

        res.status(200).json(
            {
                success:true,
                message:"Data is found",
                data:todo
            }
        )
     }
 
     catch(err){
         console.log(err)
         res.status(500).json(
             {
                 success:false,
                 
                 message:"Entire todo data is not fetched"
             }
            )
     }

}