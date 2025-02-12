// models/Appointment.js
const mongoose = require("mongoose");
;

const appointmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String },
  phone: { type: String, required: true },
  applianceType: { type: String, required: true },
  subSelection: { type: String },
  dependentSelection: { type: String },
  flatHouseNumber: { type: String, required: true },
  landmark: { type: String },
  dateTime: { type: Date, required: true },
  address: { type: String },
  description: { type: String, },
}, { timestamps: true });

const requestAppointmentModel = mongoose.model('servicerequests', appointmentSchema);

module.exports = requestAppointmentModel;