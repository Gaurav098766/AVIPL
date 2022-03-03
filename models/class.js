
const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
    title: String,
    image: String,
    price : Number,
    description : String,
    location: String,
    author:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    rarting: Number,
    reviews:[
        {
            type:Schema.Types.ObjectId,
            ref:'Review'
        }
    ]
});

const Live = mongoose.model("Live",classSchema);

module.exports = Live;