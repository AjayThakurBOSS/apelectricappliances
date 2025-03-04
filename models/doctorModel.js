const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema(
    {
        userId:{
            type: String,
        },
        firstName: {
            type: String,
            required: [true, 'first name is required.']
        },
        lastName: {
            type: String,
            required: [true, 'last name is required.']
        },
        phome: {
            type: String,
            required: [true, 'Phone mumber is required.']
        },
        email: {
            type: String,
            required: [true, 'email is required.']
        },
        website: {
            type: String,
        },
        address: {
            type: String,
            required: [true, 'Doctor Clinic Address is required.']

        },
        specialisation: {
            type: String,
            required: [true, 'Doctor specialisation is required.']

        },
        experience: {
            type: String,
            required: [true, 'Doctor experience is required.']

        },
        feePerConsultation: {
            type: Number,
            required: [true, 'Consultation fee is required.']

        },
        status:{
            type:String,
            default: 'pending'
        },
        timing: {
            type: Object,
            required: [true, 'OPD timing is required.']

        },

    },
    {timestamps:true}
)

const doctorModel = mongoose.model("doctors", doctorSchema);
module.exports = doctorModel;