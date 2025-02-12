const express = require('express');
const { feedbackCtrl, getfeedbacksCtrl } = require('../controllers/feedbackCtrl');


const router = express.Router()

// POST CUSTOMER FEEDBACK
router.post('/postfeedback', feedbackCtrl)

// POST CUSTOMER FEEDBACK
router.get('/getfeedbacks', getfeedbacksCtrl)


module.exports = router;
