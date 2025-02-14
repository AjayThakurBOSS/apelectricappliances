const express = require('express')
const colors = require('colors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const cors = require('cors')
const connectDB = require("./config/db")
const path = require('path')

// mongodb configuration
connectDB(); 


const app = express()         

// Middlewares
app.use(express.json());
app.use(morgan('dev'));


// Routes
// app.use("/api/v1/user", require("./route/userRoutes"));
// app.use("/api/v1/admin", require("./route/adminRoutes"));
// app.use("/api/v1/uploads", require("./route/fileUploadRoutes"));
// app.use("/api/v1/offlineappointments", require("./route/OfflineAppointmentRoutes"));
// app.use("/api/v1/doctor", require("./route/doctorRoute"));
app.use("/api/v1/customer", require("./route/customerRoute"));
app.use("/api/v1/feedback", require("./route/feedbackRoutes"));

// app.get('/', (req, res) => {
//     res.send('Hello World!')
//   })

// static file access
// app.use(express.static(path.join(__dirname, './client/build')))

// app.get('*', function(req, res){
//     res.sendFile(path.join(__dirname, './client/build/index.html'))
// } )


// Error Handling Middleware
// Enable CORS for all origins or specify your frontend's origin
app.use(cors({
    origin: 'http://localhost:5173', // Replace with your frontend's origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
    credentials: true, // If cookies or authentication headers are needed
}));


app.use((err, req, res, next) => {
    console.error(`Error: ${err.message}`.red);
    res.status(500).send({
        success: false,
        message: 'Internal Server Error',
        error: err.message,
    });
});

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(`Error: ${err.message}`.red);
    res.status(500).send({
        success: false,
        message: 'Internal Server Error',
        error: err.message,
    });
});


// Port configuration
const port = process.env.PORT || 8080;

// Start server
app.listen(port, () => {
    console.log(`Server is running in ${process.env.NODE_MODE || 'development'} mode on port ${port}`.bgCyan.white);
});


