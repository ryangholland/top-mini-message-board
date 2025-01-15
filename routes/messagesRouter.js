const { Router } = require("express");
const messagesRouter = Router();

const { getMessageById } = require("../controllers/messageController");

messagesRouter.get("/", (req, res) => {
  res.render("index", { messages: req.messages });
});

messagesRouter.get("/:messageId", getMessageById);

module.exports = messagesRouter;
