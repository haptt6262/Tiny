const mongoose = require('mongoose')
const ItemModel = new mongoose.Schema({
    title: { type: String },
    content: { type: String },
    arrNameImg: { type: Array }
})
module.exports = mongoose.model("RealTiny", ItemModel)