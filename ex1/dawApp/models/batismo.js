const mongoose = require('mongoose');

const batismo_schema = new mongoose.Schema({
    date:    String,
    title:    String,
    ref:    String,
    href:    String,
    _id:    String,
    pai:    String,
    mae:    String,
},
{
    versionKey: false,
    collection: 'data'
});

module.exports = mongoose.model('batismo', batismo_schema, 'batismo');