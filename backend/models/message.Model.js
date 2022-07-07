const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
  sender: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
  content: { type: String, trim: true },
  chat: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Chat",
  },
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;