const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    title:{type:String,required:true},
    description:{type:[],required:true},
}, { timestamps: true } )

//User collection name
module.exports = mongoose.model('task',taskSchema);