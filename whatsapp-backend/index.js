import express, { request } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import  connection  from "./db.js";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connection();

const PORT = 8000;

app.listen(PORT, () => console.log(`backend server is running on ${PORT}`));
