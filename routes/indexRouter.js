const { Router } = require("express");
const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.render("index", { messages: req.messages });
});

module.exports = indexRouter;
