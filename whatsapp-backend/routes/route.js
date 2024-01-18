import express from "express";
import { addUser, getUser } from "../controllers/user-controller.js";
import { addConversation, getConversation } from "../controllers/conversation-controller.js";

const route = express.Router();

route.post("/users/add", addUser);
route.get("/users/get", getUser);
route.post("/conversation/add", addConversation);
route.post("/conversation/get", getConversation);

export default route;
