const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Register = new Schema({
    first_name : {
        type : String
    },
    last_name : {
        type : String
    },
    email : {
        type : String
    },
    password : {
        type : String

    }
},{
    collection: 'register'
});

module.exports = mongoose.model('Register', Register);