import conversations from "../model/Conversation.js";

export const newConversation = async (request, response) => {
  try {
    console.log(request.body);
    const senderId = request.body.senderId;
    const receiverId = request.body.receiverId;

    const exists = await conversations.findOne({
      members: {
        $all: [senderId, receiverId],
      },
    });

    if (exists) {
      return response.status(200).json("conversation already exists");
    }

    const newConversation = new conversations({
      members: [senderId, receiverId],
    });

    newConversation.save();

    return response.status(200).json("conversation saved successfully");
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

export const getConversation = async (request, response) => {
  const senderId = request.body.senderId;
  const receiverId = request.body.receiverId;
  try {
    const conversation = await conversations.findOne({
      members: {
        $all: [senderId, receiverId],
      },
    });

    return response.status(200).json(conversation);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};
