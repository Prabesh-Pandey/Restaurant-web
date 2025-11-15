import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"],
        minlength: [2, "First name must be at least 2 characters long"],
        maxlength: [50, "First name must be at most 50 characters long"],
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"],
        minlength: [2, "Last name must be at least 2 characters long"],
        maxlength: [50, "Last name must be at most 50 characters long"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        validate: [validator.isEmail, "Please provide a valid email address"],
    },
    phone: {
        type: String,
        required: [true, "Phone number is required"],
        minlength: [10, "Phone number must be at least 10 digits long"],
        maxlength: [10, "Phone number must be at most 10 digits long"],
    },
    time: {
        type: String,
        required: [true, "Time is required"],
    },
    date: {
        type: String,
        required: [true, "Date is required"],
    },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);