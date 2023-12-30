import messages from "../model/Message.js";
import conversations from "../model/Conversation.js";

export const newMessage = async (request, response) => {
  try {
    let newMessage = new messages(request.body);
    await newMessage.save();
    await conversations.findByIdAndUpdate(request.body.conversationId, {
      message: request.body.text,
    });

    return response.status(200).json("Message has been sent successfully");
  } catch (error) {
    return response.status(500).json(error.message);
  }
};
