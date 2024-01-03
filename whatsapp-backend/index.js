import express, { request } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import  connection  from "./db.js";
import { get } from "mongoose";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connection();

const PORT = 8000;

app.listen(PORT, () => console.log(`backend server is running on ${PORT}`));

// users Collection  (unique sub)
// conversations Collection


// what is a Collection?

// a collection is a list of dictionaries  [{},{},{},{}]


// Login : 
// we filter out useful data 
// and send an API request to the backend with the user information with the help of axios library

// backkend : will take the data and add it in the database
// backend will receive the request and based on the route a controller will be called.


// Fontend is sending a request to the backend with the data. 





//API: application programming interface 



 

// chatgpt clone

// request  is sent to the API and we get a response 

// its talking to chatgpt



//Axois is a library used to make API calls from frontend to backend to a API url.


//Types of API calls
// POST: when we want to add data to the database
// GET: when we want to read data 
// PUT: update date in database
// DELETE : used to delete data from database


// CRUD operationss:
// Creata:
// Read:
// Update:
// Delete



