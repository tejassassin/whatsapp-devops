import express from "express";
import { addUser, getUsers } from "../controllers/user-controller.js";
import {
  getConversation,
  newConversation,
} from "../controllers/conversation-controller.js";
import { newMessage } from "../controllers/message-controller.js";

const route = express.Router();

route.post("/add", addUser);
route.get("/users", getUsers);
route.post("/conversation/add", newConversation);
route.post("/conversation/get", getConversation);

route.post("/message/add", newMessage);

export default route;
