import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js";

export const sendReservation = async (req, res, next) => {
    try {
        if (!req.body) {
            return next(new ErrorHandler("Request body is required", 400));
        }
        const { firstName, lastName, email, phone, time, date } = req.body;
        if (!firstName || !lastName || !email || !phone || !time || !date) {
            return next(new ErrorHandler("All fields are required", 400));
        }
        try {
            await Reservation.create({ firstName, lastName, email, phone, time, date });
            res.status(201).json({
                success: true,
                message: "Reservation created successfully",
            });
        } catch (error) {
            if (error.name === "ValidationError") {
                const messages = Object.values(error.errors).map((err) => err.message);
                return next(new ErrorHandler(messages.join(", "), 400));
            }            return next(error);
        }
    } catch (error) {
        return next(error);
    }
};