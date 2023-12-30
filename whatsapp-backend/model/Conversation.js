import mongoose from "mongoose";

const conversationSchema = mongoose.Schema(
  {
    members: {
      type: Array,
    },
    messages: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

const conversationItem = mongoose.model("conversations", conversationSchema);
export default conversationItem;
