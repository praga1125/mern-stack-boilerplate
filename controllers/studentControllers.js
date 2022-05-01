import mongoose from 'mongoose';
import {studentSchema} from '../models/studentModel';

const Student =  mongoose.model('Student', studentSchema);

export const addNewStudents = (req, res) => {
    let newStudent = new Student(req.body);

    newStudent.save((err, Student) => {
        if(err) {
            res.send(err);
        } else {
            res.json(Student);
        }
    })
}

export const getStudentList = (res) => {
    Student.find({}, (err, Student) => {
        if(err) {
            res.send(err);
        } else {
            res.json(Student);
        }
    })
}

export const getStudentById = (req, res) => {
 Student.findById(req.params.studentId, (err, Student) => {
     if(err) {
         res.send(err);
     } else {
         res.json(Student);
     }
 })   
}

export const updateStudent = (req, res) => {
    Student.findOneAndUpdate({_id: req.params.studentId}, req.body, {new: true}, (err, Student) => {
        if(err) {
            res.send(err);
        } else {
            res.json(Student);
        }
    })
}

export const deleteStudent = (req, res) => {
    Student.remove({_id: req.params.studentId}, (err) => {
        if(err) {
            res.send(err);
        } else {
            res.json("Deleted successfully")
        }
    })
}
