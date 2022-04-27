// create dependencies and set up express app
const express = require ("express");

const app = express()


const util = require ("util")
const uuid = require("./helpers/uuid")
const PORT = process.env.PORT || 3000;
//  set up to handle data parsing

app.use(express.urlencoded({ extended : true}));
app.use(express.json());

//  this serves static files in public directories
app.use(express.static("public"));

const apiRoutes= require("./Routes/apiRoutes");
const HtmlRoutes = require ("./Routes/htmlRoutes");
app.use("/api", apiRoutes);
app.use("/", HtmlRoutes);

// begin listening
app.listen(PORT,function(){
    console.log("App listening on http://localhost:" + PORT);
});