const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is require']
    },
    email: {
        type: String,
        required: [true, 'email is require']
    },
    password: {
        type: String,
        required: [true, 'password is require']
    },
    guardianName: {
        type: 'string',
        required: true,
        label: "Guardian's Name",
      },
    phone: {
        type: 'string',
        required: true,
        label: 'Phone',
        format: 'phone',
      },
      dateofbirth: {
        type: 'date',
        required: false,
        label: 'Date of Birth',
        format: 'DD-MM-YYYY',
      },
      
  gender: {
    type: 'string',
    required: true,
    label: 'Gender',
    options: ['male', 'female', 'other'],
  },
  customizeGender: {
    type: 'string',
    required: (values) => values.gender === 'other',
    label: 'Customize Gender',
  },
  address: {
    type: 'string',
    required: true,
    label: 'Address',
  },
  district: {
    type: 'string',
    required: true,
    label: 'District',
  },
  state: {
    type: 'string',
    required: true,
    label: 'State',
  },
    isAdmin:{
        type:Boolean,
        default:false,
    },
    isDoctor:{
        type:Boolean,
        default:false,
    },
    notification:{
        type:Array,
        default:[],
    },
    seennotification:{
        type:Array,
        default:[],
    },
})

const userModel = mongoose.model('users', userSchema)

module.exports = userModel






