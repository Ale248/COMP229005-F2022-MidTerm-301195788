/**
 * Filename: db.js
 * Author: Alejandro Akifarry
 * SID: 301-195-788
 * WebApp: comp229005-f2022-301195788
 * Date: Oct 29, 2022
 */

// Do not expose your credentials in your code.
// let atlasDB = "mongodb+srv://<username>:<passoword>@<cluster>/todo?retryWrites=true&w=majority";
let atlasDB = "mongodb+srv://dbuser:D1E0WgJVUer0hldI@cluster005.hyd2sxj.mongodb.net/todo?retryWrites=true&w=majority"

// Database setup
let mongoose = require('mongoose');

module.exports = function(){

    mongoose.connect(atlasDB);
    let mongodb = mongoose.connection;

    mongodb.on('error', console.error.bind(console, 'Connection Error:'));
    mongodb.once('open', ()=>{
        console.log('===> Connected to MongoDB.');
    })

    return mongodb;
}