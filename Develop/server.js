
const express = require ("express");

const app = express()

const dbJason =require("./db/db.json")

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended : true}));
app.use(express.json());


app.use(express.static("public"));

const apiRoutes= require("./Routes/apiRoutes");
const HtmlRoutes = require ("./Routes/htmlRoutes");
app.use("/api", apiRoutes);
app.use("/", HtmlRoutes);


app.listen(PORT,function(){
    console.log("App listening on http://localhost:" + PORT);
});