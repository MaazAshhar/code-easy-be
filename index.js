import express, { urlencoded } from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import SubmissionRoute from './routes/SubmissionRoute.js';
import bodyParser from "body-parser";


dotenv.config();

const port = process.env.PORT;
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(urlencoded({ extended: false }));

app.use('/', SubmissionRoute);



app.listen(port,() => console.log(`server is running on port: ${port}`))