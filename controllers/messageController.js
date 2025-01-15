const createMessage = (req, res) => {
  req.messages.push({
    text: req.body.messageText,
    user: req.body.author,
    added: new Date(),
  });
  res.redirect("/");
};

module.exports = { createMessage };
