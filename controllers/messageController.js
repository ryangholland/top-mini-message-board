const asyncHandler = require("express-async-handler");

const createMessage = (req, res) => {
  req.messages.push({
    id: crypto.randomUUID(),
    text: req.body.messageText,
    user: req.body.author,
    added: new Date(),
  });
  res.redirect("/");
};

const getMessageById = asyncHandler(async (req, res) => {
  const { messageId } = req.params;

  const message = await req.messages.find(
    (message) => message.id === Number(messageId)
  );

  if (!message) {
    throw new Error("Message not found");
  }

  res.render("message", { message: message });
});

module.exports = { createMessage, getMessageById };
