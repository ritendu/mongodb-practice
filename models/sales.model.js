const mongoose = require("mongoose");

const salesSchema = new mongoose.Schema({
    item:{type:String},
    price:{type:Number},
    quantity:{type:Number},
    date:{type:String}
})

module.exports = mongoose.model('Sales',salesSchema)