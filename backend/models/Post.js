const mongoose = require('mongoose');


const PostSchema = mongoose.Schema({
    Nom: {
        type: String,
        required: true
    },
    Prenom: {
        type: String,
        required: true
    },
    Age: {
        type: Number,
        required: true
    },
    Ecurie: {
        type: String,
        required: true
    },
    Victoires: {
        type: Number,
        required: true
    }
});


module.exports = mongoose.model('Post', PostSchema);