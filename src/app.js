const dotenv = require('dotenv');
const express = require('express');
const app = express();
const router = require("../src/router/foodreq")
const food = require("../src/models/foodschema");
require("../src/router/foodreq")
dotenv.config({path : './config.env'})

const mongoose = require('mongoose');
require('./db/conn');
app.use(express.json());
app.use(router);


const port = process.env.PORT || 3000;


app.listen(port, ()=>{
    console.log(`Connection is live at port no. ${port}`);
})
