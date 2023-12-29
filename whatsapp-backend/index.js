import express from "express";
import route from "./routes/route.js";
import connection from "./db.js";

import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", route);

connection();

const PORT = 8000;

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
