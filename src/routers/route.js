const express = require('express');
const router = new express.Router();
const Student = require('../models/students')

// router.get('/', (req, res)=>{
//     res.send('REST API in NodeJs')
// })

// Create new Students regstration 

// post method using Promise
// app.post('/students', (req, res) => {
//     console.log(req.body);
//     const newStudent = new Student(req.body)
//     newStudent.save().then(()=>{
//         res.status(201).send(newStudent);
//     }).catch((e)=>{
//         res.status(400).send(e);
//     })
// })
// post method using async await
router.post('/students', async (req, res) => {
    try {
        const newStudent = new Student(req.body);
        const createStudent = await newStudent.save();
        res.status(201).send(createStudent);
    } catch (error) {
        res.status(400).send(error);
    }
})
// get or read using 
router.get('/students', async (req, res) => {
    try {
        const studentsData = await Student.find();
        res.send(studentsData);
    } catch (e) {
        res.send(e);
    }
})

// get or read individual data 

router.get('/students/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const studentData = await Student.findById(_id)
        if (!studentData) {
            return res.status(404).send('');
        } else {
            res.send(studentData);
        }
    } catch (e) {
        res.status(500).send(e);
    }
})

// update by id 
router.patch('/students/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const updateStudent = await Student.findByIdAndUpdate(_id, req.body, {
            new: true
        })
        res.send(updateStudent)
    } catch (e) {
        res.status(404).send(e);
    }
})

// delete 
router.delete('/students/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const deleteStudent = await Student.findByIdAndDelete(_id)
        if (!_id) {
            return res.status(400).send();
        }
        res.send(deleteStudent)

    } catch (e) {
        res.status(500).send(e)
    }
})


module.exports = router;