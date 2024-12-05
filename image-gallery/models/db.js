const mongoose = require("mongoose");
const express = require("express");
const app = express();

const mongourl = "mongodb://127.0.0.1:27017/mygallery"
mongoose.connect(mongourl, { 
    useNewUrlParser: true,
     useUnifiedTopology: true
     });
const db = mongoose.connection;
db.on("connected" , ()=>{
    console.log("connected to mongo db ");
});
db.on("error" , (err)=>{
    console.log("connected to mongo db ",err);
});
db.on("disconnected" , ()=>{
    console.log("disconnected to mongo db ");
});

module.exports = db;
