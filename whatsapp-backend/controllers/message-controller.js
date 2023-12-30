import conversations from "../model/Conversation.js";

export const newMessage = async (request, response) => {
  try {
    console.log(request.body);
    await conversations.findByIdAndUpdate(request.body.conversationId, {
      $push: {
        messages: {
          text: request.body.text,
          type: request.body.type,
        },
      },
    });

    return response.status(200).json("Message has been sent successfully");
  } catch (error) {
    return response.status(500).json(error.message);
  }
};
