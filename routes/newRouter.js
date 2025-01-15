const { Router } = require("express");
const newRouter = Router();

const { createMessage } = require("../controllers/messageController");

newRouter.post("/", createMessage);

newRouter.get("/", (req, res) => {
  res.render("form", {});
});

module.exports = newRouter;
