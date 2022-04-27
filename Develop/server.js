// create dependencies and set up express app
const express = require ("express");

const app = express()
const PORT = process.env.PORT || 3000;
//  set up to handle data parsing

app.use(express.urlencoded({ extended : true}));
app.use(express.json());

//  this serves static files in public directories
app.use(express.static("public"));

require ("./db")
