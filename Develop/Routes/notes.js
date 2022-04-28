// const path = require("path");
const app = require("express").Router()
const db = require("../db/db.json")
const fs= require("fs")
// const app = express()



    app.get("/",(req,res)=>{
        fs.readFile("./db/db.json", "utf-8",(err,data)=>{
            if(err){
                throw err
            }else{
                res.json(JSON.parse(data))
                
            }
        })
        
    });

//    Another get route for an specific note
//   post route for new note 
//   Delete route 
module.exports = app 