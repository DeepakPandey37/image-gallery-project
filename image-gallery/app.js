const express = require("express");

const expressLayout = require('express-ejs-layouts'); 

const db = require("./models/db");
const app = express();

const port = 3000;
app.use(express.urlencoded({ extended: true })); 
const methodOverride = require('method-override');


app.use(methodOverride('_method'));  

app.use(express.json()); 
app.use(express.static("public"));



app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

app.use("/", require("./server/routes/mainroutes"));



app.listen(port, () => {
    console.log(`Server started on ${port}`);
});
