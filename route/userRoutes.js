const express = require('express')
const { loginController, registerController, authController, applyDoctorController, getAllNotificationController, deleteAllNotificationController, getAllDoctorsController, bookAppointmentController, bookingAvailabilityController, userAppointmentListController } = require('../controllers/userCtrl')
const authMiddleware = require('../middlewares/authMiddleware')

//route object
const router = express.Router()

//routes

//LOGIN || POST 
router.post('/login', loginController)

//REGISTER || POST
router.post("/register", registerController)

//Auth || POST 
router.post('/getUserData', authMiddleware , authController)

//Apply Doctor || POST 
router.post('/apply-doctor', authMiddleware , applyDoctorController)


//Notification Doctor || POST 
router.post('/get-all-notifications', authMiddleware , getAllNotificationController)

//Notification Doctor || POST 
router.post('/delete-all-notifications', authMiddleware , deleteAllNotificationController)

//Get All Doctor || POST 
router.get('/getAllDoctors', authMiddleware , getAllDoctorsController)

//Book Appointment || POST 
router.post('/book-appointment', authMiddleware , bookAppointmentController)

//Booking Availability || POST 
router.post('/booking-availability', authMiddleware , bookingAvailabilityController)

// Appointment List 
router.get('/user-appointments-list', authMiddleware, userAppointmentListController)

module.exports = router