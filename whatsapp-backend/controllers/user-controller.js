import Users from "../model/User.js";

export const addUser = async (request, response) => {
  console.log(request.body);
  try {
    let exist = await Users.findOne({ sub: request.body.sub });
    if (exist) {
      response.status(200).json({ msg: "user already exists" });
      return;
    }

    const newUser = new Users(request.body);
    await newUser.save();
    return response.status(200).json(newUser);
  } catch (error) {
    response.status(500).json(error.message);
  }
};

export const getUsers = async (request, response) => {
  try {
    const users = await Users.find({});
    
    return response.status(200).json(users);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};
