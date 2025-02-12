const express = require('express');
const authMiddleware = require("../middlewares/authMiddleware");
const { postAppointmentRequestCtrl , getAppointmentRequestCtrl} = require('../controllers/customerCtrl');

const router = express.Router();

// POST appointment request
router.post('/requestAppointment', postAppointmentRequestCtrl)

// POST appointment request
router.get('/getAppointmentsRequests', getAppointmentRequestCtrl)


module.exports = router;