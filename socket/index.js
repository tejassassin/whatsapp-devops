import { Server } from "socket.io";

const io = new Server(9000, {
  cors: {
    origin: "http://localhost:3000",
  },
});

let users = [];

const addUser = (userData, socketId) => {
  if (!users.some((user) => user.sub == userData.sub)) {
    users.push({ ...userData, socketId });
    io.emit("getUsers", users);
  }
};

io.on("connection", (socket) => {
  console.log("user connected");
  console.log(users);

  socket.on("addUsers", (userData) => {
    addUser(userData, socket.id);
  });
  io.emit("getUsers", users);
});
