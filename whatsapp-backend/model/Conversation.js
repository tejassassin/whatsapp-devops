import mongoose from "mongoose";

const conversationSchema = mongoose.Schema(
  {
    members: {
      type: Array,
    },
    message: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const conversations = mongoose.model("conversations", conversationSchema);
export default conversations;
