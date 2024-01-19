import Conversations from "../models/conversation.js";

export const addConversation = async (request, response) => {
  // console.log("Conversation request body");
  // console.log(request.body);

  try {
    const senderId = request.body.senderId;
    const receiverId = request.body.receiverId;

    const exists = await Conversations.findOne({
      members: {
        $all: [senderId, receiverId],
      },
    });

    // console.log("conversation exists");
    // console.log(exists);

    if (exists) {
      response.status(200).json("Conversation already exists");
      return;
    }

    const newConversation = new Conversations({
      members: [senderId, receiverId],
    });

    await newConversation.save();

    response.status(200).json(newConversation);

    // if conversation doesnt exist
  } catch (error) {
    response.status(500).json(error.message);
  }
};

export const getConversation = async (request, response) => {
  console.log(request.query);

  try {
    const senderId = request.query.senderId;
    const receiverId = request.query.receiverId;

    const conversation = await Conversations.findOne({
      members: {
        $all: [senderId, receiverId],
      },
    });
    response.status(200).json(conversation);
  } catch (error) {
    response.status(500).json(error.message);
  }
};

export const addMessage = async (request, response) => {
  console.log(request.body);

  try {
    await Conversations.findByIdAndUpdate(request.body.conversationId, {
      $push: {
        messages: {
          text: request.body.message,
          type: request.body.type,
          senderId: request.body.senderId,
          receiverId: request.body.receiverId,
          timestamp: request.body.timestamp,
        },
      },
    });

    response.status(200).json("message added");
  } catch (error) {
    response.status(500).json(error.message);
  }
};
