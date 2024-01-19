import express from "express";
import { addUser, getUser } from "../controllers/user-controller.js";
import {
  addConversation,
  addMessage,
  getConversation,
} from "../controllers/conversation-controller.js";

const route = express.Router();

route.post("/users/add", addUser);
route.get("/users/get", getUser);
route.post("/conversation/add", addConversation);
route.get("/conversation/get", getConversation);
route.post("/messages/add", addMessage);

export default route;
