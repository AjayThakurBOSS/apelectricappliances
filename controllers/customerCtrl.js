const requestAppointmentModel = require("../models/requestAppointmentModel");
const nodemailer = require("nodemailer");

// Create transporter for sending emails
const transporter = nodemailer.createTransport({
  service: "gmail", // You can use other services like Yahoo, Outlook, etc.
  auth: {
    user: "ajaykrthakur02@gmail.com", // Your email address
    pass: "vhpg bmqi xilq uinq",  // Your email password or app password
  },
});

const postAppointmentRequestCtrl = async (req, res) => {
  try {
    const newRequest = new requestAppointmentModel(req.body);
    await newRequest.save();

    // Extract form data
    const { name, email, phone, applianceType, subSelection, dependentSelection, flatHouseNumber, landmark, dateTime, address, description } = req.body;

    // Send confirmation email to the user
    const userMailOptions = {
      from: "ajaykrthakur02@gmail.com", // Sender address
      to: email, // Recipient address (user's email from the form)
      subject: "Appointment Request Received", // Subject line
      text: `Dear ${name},\n\nThank you for scheduling an appointment with us. We have received your request and will get back to you soon.\n\nBest regards,\nYour Service Team`, // Plain text body
      html: `<p>Dear ${name},</p>
             <p>Thank you for scheduling an appointment with us. We have received your request and will get back to you soon.</p>
             <p>Best regards,<br>Your Service Team</p>`, // HTML body
    };

    // Send notification email to the admin
    const adminMailOptions = {
      from: "ajaykrthakur02@gmail.com", // Sender address
      to: "letsmeetajaythakur@gmail.com, apeservicess@gmail.com", // Admin's email address
      subject: "New Appointment Request", // Subject line
      text: `New appointment request received:\n\n
             Name: ${name}\n
             Email: ${email}\n
             Phone: ${phone}\n
             Appliance Type: ${applianceType}\n
             Sub Selection: ${subSelection}\n
             Dependent Selection: ${dependentSelection}\n
             Flat/House Number: ${flatHouseNumber}\n
             Landmark: ${landmark}\n
             Preferred Date and Time: ${dateTime}\n
             Address: ${address}\n
             Issue Description: ${description}\n`, // Plain text body
      html: `<p>New appointment request received:</p>
             <ul>
               <li><strong>Name:</strong> ${name}</li>
               <li><strong>Email:</strong> ${email}</li>
               <li><strong>Phone:</strong> ${phone}</li>
               <li><strong>Appliance Type:</strong> ${applianceType}</li>
               <li><strong>Sub Selection:</strong> ${subSelection}</li>
               <li><strong>Dependent Selection:</strong> ${dependentSelection}</li>
               <li><strong>Flat/House Number:</strong> ${flatHouseNumber}</li>
               <li><strong>Landmark:</strong> ${landmark}</li>
               <li><strong>Preferred Date and Time:</strong> ${dateTime}</li>
               <li><strong>Address:</strong> ${address}</li>
               <li><strong>Issue Description:</strong> ${description}</li>
             </ul>`, // HTML body
    };

    // Send email to the user
    transporter.sendMail(userMailOptions, (error, info) => {
      if (error) {
        console.log("Error sending email to user:", error);
      } else {
        console.log("Email sent to user:", info.response);
      }
    });

    // Send email to the admin
    transporter.sendMail(adminMailOptions, (error, info) => {
      if (error) {
        console.log("Error sending email to admin:", error);
      } else {
        console.log("Email sent to admin:", info.response);
      }
    });

    // Generate WhatsApp message
    const whatsappMessage = `New Appointment Request:\n\n
      Name: ${name}\n
      Email: ${email}\n
      Phone: ${phone}\n
      Appliance Type: ${applianceType}\n
      Sub Selection: ${subSelection}\n
      Dependent Selection: ${dependentSelection}\n
      Flat/House Number: ${flatHouseNumber}\n
      Landmark: ${landmark}\n
      Preferred Date and Time: ${dateTime}\n
      Address: ${address}\n
      Issue Description: ${description}\n`;

    // Encode the message for WhatsApp URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    console.log(encodedMessage)
    // Generate WhatsApp Click to Chat link
    const whatsappLink = `https://wa.me/918310885838?text=${encodedMessage}`; // Replace with admin's phone number
    console.log(encodedMessage)
    console.log(whatsappLink)
    res.status(201).send({
      message: "Appointment request sent successfully.",
      success: true,
      whatsappLink, // Send the WhatsApp link to the frontend
    });

  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Posting Your Appointment Request",
    });
  }
};

const getAppointmentRequestCtrl = async (req, res) => {
  try {
    const appointmentsRequests = await requestAppointmentModel.find();
    res.status(200).send({
      success: true,
      message: "Appointments Requests fetched successfully",
      data: appointmentsRequests,
    });

  } catch (error) {
    console.log("Error in fetching Appointment Requests", error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in fetching Appointment Requests from DB",
    });
  }
};

module.exports = { postAppointmentRequestCtrl, getAppointmentRequestCtrl };