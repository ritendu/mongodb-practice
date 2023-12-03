const UserModel = require("../models/user.model")
const SalesModel = require("../models/sales.model")
const BooksModel = require("../models/books.model")

const createUser = async(req,res)=>{
    
try {
    const createUser = await UserModel.create({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    })
    res.send({data:createUser})
} catch (error) {
    
}
}

const createSales = async(req,res)=>{
    try {
    const createSales = await SalesModel.insertMany(req.body)
        res.send({data:createSales})
    } catch (error) {
        
    }
}

const createBooks = async(req,res)=>{
try {
    const createBooks = await BooksModel.insertMany(req.body);
    res.send({data:createBooks})
} catch (error) {
    
}
}

const getBooks = async(req,res)=>{
    const getBooks = await BooksModel.aggregate([
        {
            $group:{
                _id:'$author',
                books:{$push:'$title'}
            }
        }
    ])
    res.send({data:getBooks})

}
const getSales = async(req,res)=>{
    console.log("Hello World...")
    try {
     const getSales = await SalesModel.aggregate([
        {
            $group:{
                _id:'$item',
                quantity:{$sum:'$quantity'}

            }
        }
     ])   
console.log(getSales,"getSales")
     res.send({data:getSales})

    } catch (error) {
        
    }
}

module.exports = {createUser,createSales,createBooks,getSales,getBooks}