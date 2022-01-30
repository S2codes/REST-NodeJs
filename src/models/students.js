const mongoose = require('mongoose')
const validator = require('validator');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 's name required'],
        minlength: 3
    },
    email: {
        type: String,
        required: [true, 'email add required'],
        unique:[true, 'Email is already Present'],
        validate(value){
            if (!validator.isEmail(value)) {
                throw new Error('Invalid Email')
            }
        }
    },
    contact: {
        type: Number,
        required: [true, 'contact num required'],
        unique: true,
        min: 10
    }
})


// create a new Collection 
const Student = new mongoose.model('Student', studentSchema);

module.exports = Student;