const feedbackModel = require("../models/feedbackModel")
const nodemailer = require("nodemailer");

// Create transporter for sending emails
const transporter = nodemailer.createTransport({
  service: "gmail", // You can use other services like Yahoo, Outlook, etc.
  auth: {
    user: "ajaykrthakur02@gmail.com", // Your email address
    pass: "vhpg bmqi xilq uinq",  // Your email password or app password
  },
});


const feedbackCtrl = async (req, res) => {
    try {
        const { name, email, contactNumber, message } = req.body;
    
        if (!name || !email || !contactNumber || !message) {
          return res.status(400).json({ error: 'All fields are required.' });
        }
    
        const newContact = new feedbackModel({ name, email, contactNumber, message });
        await newContact.save();

        // Email configuration
    const mailOptions = {
      from: "ajaykrthakur02@gmail.com", // Sender address
      to: " apeservicess@gmail.com, letsmeetajaythakur@gmail.com", // Receiver's email address
      subject: "New Contact Form Submission",
      html: `
        <h2>New Feedback Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Contact Number:</strong> ${contactNumber}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    
        res.status(201).json({ message: 'Form submitted successfully.' });
      } catch (error) {
        console.error('Error in submitting contact form:', error);
        res.status(500).json({ error: 'An error occurred while submitting the form.' });
      }
}

const getfeedbacksCtrl = async (req, res) => {
  try {
    const feedbacks = await feedbackModel.find();
    res.status(200).send({
      success: true,
      message: "Feedbacks fetched successfully",
      data: feedbacks,
    });
  } catch (error) {
    console.log("Error in fetching Feedbacks", error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in fetching Feedbacks from DB",
    });
  }
};

module.exports = {feedbackCtrl, getfeedbacksCtrl}