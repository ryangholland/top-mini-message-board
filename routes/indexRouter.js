const { Router } = require("express");
const indexRouter = Router();

const messages = [
  {
    text: "It's like Lenin said. You look for the person who would benefit, and uh...uh, you know.",
    user: "The Dude",
    added: new Date(),
  },
  {
    text: "I am the Walrus.",
    user: "Donny",
    added: new Date(),
  },
  {
    text: "Shut the fuck up, Donny.",
    user: "Walter",
    added: new Date(),
  },
];

indexRouter.get("/", (req, res) => {
  res.render("index", { messages: messages });
});

module.exports = indexRouter;
