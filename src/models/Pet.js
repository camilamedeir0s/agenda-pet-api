const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: false
    },
    breed: {
        type: String,
        required: false
    },
    fur_color: {
        type: String,
        required: false
    },
    sex: {
        type: String,
        required: false
    },
    age: {
        type: Number,
        required: false
    },
    weight: {
        type: Number,
        required: false
    },
    allergies:[{
        type: String,
        required: false
    }],
    notes:[{
        type: String,
        required: false
    }],
    medicines: [Schema.Types.Mixed],
    consultations: [Schema.Types.Mixed],
    vaccines: [Schema.Types.Mixed],
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }

}, {timestamps: true});

module.exports = mongoose.model('Pet', PetSchema);