import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import {dbConnection } from './database/dbConnection.js';

export const app = express();
dotenv.config({ path: './config/config.env' });


app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dbConnection();

export default app;