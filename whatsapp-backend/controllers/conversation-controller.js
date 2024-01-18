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
  // console.log("i am here");

  console.log(request.body);

  try {
    //   const senderId = request.body.senderId;
    //   const receiverId = request.body.receiverId;
    //   const exists = await Conversations.findOne({
    //     members: {
    //       $all: [senderId, receiverId],
    //     },
    //   });
    //   console.log("conversation exists");
    //   console.log(exists);
    //   if (exists) {
    //     response.status(200).json("Conversation already exists");
    //     return;
    //   }
    //   const newConversation = new Conversations({
    //     members: [senderId, receiverId],
    //   });
    //   await newConversation.save();
    //   response.status(200).json(newConversation);
  } catch (error) {
    response.status(500).json(error.message);
  }
};
// request.body =
// {
//   senderId: account.sub,
//   receiverId: user.sub
// }

// Conversation:
// {
//   messages:[],
//   members:[senderId, receiverID],
//   createdAt,
//   updatedAt
// }
