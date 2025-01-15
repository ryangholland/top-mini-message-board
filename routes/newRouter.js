const { Router } = require("express");
const newRouter = Router();

newRouter.post("/", (req, res) => {
  req.messages.push({
    text: req.body.messageText,
    user: req.body.author,
    added: new Date(),
  });
  res.redirect("/");
});

newRouter.get("/", (req, res) => {
  res.render("form", {});
});

module.exports = newRouter;
