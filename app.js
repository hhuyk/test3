const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
var db = mongoose.connect('mongodb://localhost:27017/lolTest',{ useNewUrlParser: true });
const user = require('./server/routers/user')



const app = express()
app.use(require('cors')())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(user)

app.listen(3000,()=>{
    console.log('running 3000')
})
