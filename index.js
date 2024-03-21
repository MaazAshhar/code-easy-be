import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import SubmissionRoute from './routes/SubmissionRoute.js';


dotenv.config();

const port = process.env.PORT || 8000;
const app = express();
app.use(cors());
app.use(express.json());

app.use('/', SubmissionRoute);



app.listen(port,() => console.log(`server is running on port: ${port}`))