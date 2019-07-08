const mongoose = require('mongoose')

const Users = mongoose.Schema({
    userName :String,
    password : String,
    createdAt : { type : Date, default : Date.now },
}
,
    // { collection: 'user', timestamps: true}
)

const User = module.exports = mongoose.model('user',Users);
