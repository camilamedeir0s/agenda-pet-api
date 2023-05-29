const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
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
    birth_date: {
        type: String,
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
    medicines: [mongoose.Schema.Types.Mixed],
    consultations: [mongoose.Schema.Types.Mixed],
    vaccines: [mongoose.Schema.Types.Mixed],
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }

}, {timestamps: true});

module.exports = mongoose.model('Pet', PetSchema);
