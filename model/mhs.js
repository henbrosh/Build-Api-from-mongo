const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const mhsSchema = new Schema({
    title:String,
    mh_s:String
})



module.exports = mongoose.model('falls',mhsSchema);

