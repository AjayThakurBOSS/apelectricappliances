const userModel = require('../models/userModels');
const doctorModel = require('../models/doctorModel')
const appointmentModel = require('../models/appointmentModel')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const moment = require('moment')

//register callback
const registerController = async (req, res ) => {

    try{
        const existingUser = await userModel.findOne({email: req.body.email})
        if(existingUser) {
            return res.status(200).send({message: "User Already Exists", success: false})
        }
        const password = req.body.password;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        req.body.password = hashedPassword;
        const newUser = new userModel(req.body);
        await newUser.save();
        res.status(201).send({message: "Register Sucessafully", success: true});

    }catch (error){
        console.log(error)
        res.status(500).send({success: false, message: `Register Controller ${error.message}`})
    }

}



const loginController = async (req, res) => {
    console.log(process.env.JWT_SECRET)
    try{
        const  user = await userModel.findOne({email:req.body.email})
        if(!user){
            return res.status(200).send({message:`user not found`, success: false})
        }
        const isMatch = await bcrypt.compare(req.body.password, user.password)
        if(!isMatch){
            return res.status(200).send({message: `Invalid Email or Password`, success: false })
        }
        const token= jwt.sign({id:user._id},"XYZGHSJ123", {expiresIn:'1d'})
        res.status(200).send({message:"Login Success", success: true, token})

    }catch (error){
        console.log(error)
        res.status(500).send({message:`Error in login CTRL ${error.message}`})
    }
}

// auth controller

const authController = async (req, res) => {
    try{
        const user = await userModel.findOne({_id: req.body.userId})
        user.password = undefined;
        if(!user){
            return res.status(200).send({
                message: "User not Found",
                success: false
            })
        }else{
            res.status(200).send({
                success: true,
                data: user,
            });
        }

    }catch (error) {
        console.log(error)
        req.status(500).send({
            message: "Auth Error",
            success: false,
            error
        })
    }
}

// Apply for Doctor Controller 
/* const applyDoctorController = async (req, res) => {
    try{
        const newDoctor = await doctorModel({...req.body, status:'pending'})
        await newDoctor.save();
        const adminUser = await userModel.findOne({isAdmin:true});
        const notification = adminUser.notification
        notification.push({
            type: 'apply-doctor-request',
            message: `${newDoctor.firstName} ${newDoctor.lastName} has applied for a Doctor Account`,
            data:{
                doctorId: newDoctor._id,
                name:newDoctor.firstName +" " + newDoctor.lastName,
                onClickpath: '/admin/doctors'
            }
        })
        await userModel.findByIdAndDelete(adminUser._id, {notification})
        res.status(201).send({
            success: true,
            message: "Doctor Account Applied successfully"
        })
    }catch(error){
        console.log(error);
        res.status(500).send({
            success: false,
            error, 
            message:"Error While applying for doctor"
        })
    }

} */

    const applyDoctorController = async (req, res) => {
        try {
            // Create a new doctor with status "pending"
            const newDoctor = new doctorModel({ ...req.body, status: 'pending' });
            await newDoctor.save();
    
            // Find the admin user
            const adminUser = await userModel.findOne({ isAdmin: true });
    
            if (!adminUser) {
                return res.status(404).send({
                    success: false,
                    message: "Admin user not found"
                });
            }
    
            // Add a notification to the admin's notification array
            const notification = {
                type: 'apply-doctor-request',
                message: `${newDoctor.firstName} ${newDoctor.lastName} has applied for a Doctor Account`,
                data: {
                    doctorId: newDoctor._id,
                    name: `${newDoctor.firstName} ${newDoctor.lastName}`,
                    onClickPath: '/admin/doctors'
                }
            };
    
            adminUser.notification.push(notification);
            await adminUser.save(); // Save the updated admin user
    
            res.status(201).send({
                success: true,
                message: "Doctor Account Applied successfully"
            });
        } catch (error) {
            console.error(error);
            res.status(500).send({
                success: false,
                error,
                message: "Error While applying for doctor"
            });
        }
    };

    // getAllNotificationController
    const getAllNotificationController = async (req, res) => {
        try {
            // Fetch the user by ID
            const user = await userModel.findOne({ _id: req.body.userId });
    
            if (!user) {
                return res.status(404).send({
                    success: false,
                    message: "User not found",
                });
            }
    
            // Move notifications to seen notifications
            // const notification = user.notification
            user.seennotification.push(...user.notification);
            user.notification = [];
    
            // Save the updated user
            const updatedUser = await user.save();
    
            // Send success response
            res.status(200).send({
                success: true,
                message: "All notifications marked as read",
                data: updatedUser,
            });
            
        } catch (error) {
            console.error("Error in marking notifications as read:", error);
            res.status(500).send({
                message: 'Error in processing notifications',
                success: false,
                error: error.message || error,
            });
        }
    };
    
    // deleteAllNotificationController
    const deleteAllNotificationController = async (req, res) =>{

        try{
            const user = await userModel.findOne({_id:req.body.userId});
            user.notification = [];
            user.seennotification= [];
            const updatedUser = await user.save();
            updatedUser.password = undefined;
            res.status(200).send({
                success: true,
                message:'Notifications Deleted successfully',
                data: updatedUser,
            })

        }catch (error) {
            console.log(error)
            res.status(500).send({
                success:false,
                message: 'unable to delete all notifications',
                error
            })
        }

    }

    // getAllDoctorsController
    const getAllDoctorsController = async (req, res) => {
     try{
        const doctors = await doctorModel.find({status:'approved'});
        res.status(200).send({
            success: true,
            message:'Doctor List fetched successfully',
            data: doctors
        })

     }  catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            error,
            message: 'Error while fetching doctors'
        })
     } 
    }

    // book Appointment Controller
    const bookAppointmentController = async (req, res) => {
        try{
            req.body.date = moment(req.body.date, 'DD-MM-YYYY').toISOString()
            req.body.time = moment(req.body.time, 'HH:mm').toISOString()
            req.body.status = 'pending';
            const newAppointment = new appointmentModel(req.body)
            await newAppointment.save();
            /* const user = await userModel.findOne({_id: req.body.doctorInfo.userId});
            user.notification.push({
                type: 'New appointment request',
                message: `A new appointment request from ${req.body.userInfo.name}`,
                onClickPath: '/user/appointments'
            })
            await user.save(); */
            // Find all admin users
       /*  const adminUsers = await userModel.find({ isAdmin: true });
        adminUsers.forEach(async (admin) => {
            if (!admin.notification) admin.notification = [];
            admin.notification.push({
                type: 'New appointment request',
                message: `A new appointment request has been made by ${req.body.userInfo.name}`,
                onClickPath: '/admin/dashboard',
            });
            await admin.save();
        }); */
           
            res.status(200).send({
                success:true,
                message:'Appointment Book successfully'
            })
        }catch (error){
            console.log(error)
            res.status(500).send({
                success: false,
                error,
                message: 'Error while booking appointment'
            })
        }

    }

    // booking Availability Controller

    const bookingAvailabilityController = async (req, res) => {
        try{
            const date = moment(req.body.date, "DD-MM-YYYY").toISOString();
            const fromTime = moment(req.body.time, 'HH:mm').subtract(1, 'hours').toISOString();
            const toTime = moment(req.body.time, 'HH:mm').add(1, 'hours').toISOString();
            const doctorId = req.body.doctorId
            const appointments = await appointmentModel.find({
                doctorId,date, time:{
                    $gte:fromTime, $let: toTime
                }
            })
            if(appointmentModel.length > 0){
                return res.status(200).send({
                    message: "Appointments not availibale at this time",
                    success: true,
                });
            }else{
                return res.status(200).send({
                    success: true,
                    message: 'Appointment slot available'
                })
            }

        }catch (error){
            console.log(error)
            res.status(500).send({
                success:false,
                error,
                message:'Error in Booking'
            })
        }

    }

    //user Appointment List Controller 
    const userAppointmentListController = async (req, res) => {
        try{
            const appointments = await appointmentModel.find({
                userId: req.body.userId,
            });
            res.status(200).send({
                success: true,
                message: 'User Appointments list fetched Successfully',
                data: appointments
            })

        }catch(error){
            console.log(error)
            res.status(500).send({
                success: false,
                error,
                message: 'Error in Appointment list fetching'
            })
        }
    }


module.exports = { loginController, registerController, authController, applyDoctorController, getAllNotificationController, deleteAllNotificationController,getAllDoctorsController,bookAppointmentController, bookingAvailabilityController, userAppointmentListController }