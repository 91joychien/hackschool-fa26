//TODO:Require Mongoose down below!
const mongoose = require("mongoose");

const PastGameSchema = require("./pastGameSchema");

const userSchema = new mongoose.Schema(
    {
        /**TODO
         * Define the other six fields down below
         * 
         * Reminder: make sure each field is comma-separated!
         */
        created_at: {
            type: Date,
            default: Date.now
        }
    },
    { _id: true }
);

//Turn your userSchema into a model and export in module.exports!