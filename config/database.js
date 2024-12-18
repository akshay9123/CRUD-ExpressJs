const mongoose = require('mongoose')
require('dotenv').config()

const dbConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL).then(()=>{
        console.log("connected ho gya h bhai")
    }).catch((err)=>{
        console.log("Nhi hua h bhai ", err)
        process.exit(1)
    })
}

module.exports = dbConnect;