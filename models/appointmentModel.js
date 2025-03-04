const mongoose = require('mongoose')

const appointmentSchema = new mongoose.Schema({
    userId:{
        type: String,
        required: true
    },
    doctorId:{
        type: String,
        required: true
    },
    doctorInfo:{
        type: Object,
        required: true
    },
    userInfo:{
        type: Object,
        required: true
    },
    date:{
        type: Date,
        required: true
    },
    status:{
        type: String,
        required: true,
        default: 'pending'
    },
    time:{
        type: Object, 
        required : true
    },
    symptom:{
        type: String,
    }
}, {timestamps:true})

const appontmentModel = mongoose.model('appointments', appointmentSchema)
module.exports = appontmentModel;