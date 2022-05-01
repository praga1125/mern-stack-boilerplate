import mongoose from "mongoose";

const Scheme = mongoose.Schema;

export  const studentSchema = new Scheme ({
    firstName: {
        type: String,
        required: true
      },
      lastName: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      },
      phone: {
        type: Number
      }
});