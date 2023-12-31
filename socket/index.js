import { Server } from "socket.io";

const io = new Server(9000, {
  cors: {
    origin: "http://localhost:3000",
  },
});

let users = [];

const addUser = (userData, socketId) => {
  let updatedUsers = [...users];

  if (!users.some((user) => user.sub == userData.sub)) {
    updatedUsers.push({ ...userData, socketId });
  }

  // console.log(users, updatedUsers);
  if (JSON.stringify(users) !== JSON.stringify(updatedUsers)) {
    users = updatedUsers;
    // console.log(users, updatedUsers);
    io.emit("getUsers", users);
  }
};

const delUser = (socketId) => {
  return users.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
  return users.find((user) => user.sub === userId);
};

io.on("connection", (socket) => {
  socket.on("addUsers", (userData) => {
    console.log(userData.name, " connected");
    addUser(userData, socket.id);
  });

  socket.on("sendMessage", (data) => {
    const user = getUser(data.receiverId);
    if (user) {
      io.to(user.socketId).emit("getMessage", data);
    }
  });

  socket.on("disconnect", () => {
    let user = users.filter((user) => user.socketId == socket.id)[0];

    console.log(user?.name, " disconnected");
    let updatedUsers = delUser(socket.id);
    if (JSON.stringify(users) !== JSON.stringify(updatedUsers)) {
      users = updatedUsers;
      io.emit("getUsers", users);
    }
  });
});
