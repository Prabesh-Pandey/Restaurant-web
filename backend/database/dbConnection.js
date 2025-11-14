import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose.connect(process.env.MONGODB_URI, {
        dbName: 'RESTAURANT'
    }).then(() => {
        console.log('Database connected successfully');
    }).catch((err) => {
        console.log('Database connection failed', err);
    })
};

export default dbConnection;