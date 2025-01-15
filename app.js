const express = require("express");
const path = require("node:path");
const app = express();

const indexRouter = require("./routes/indexRouter");
const newRouter = require("./routes/newRouter");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

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

app.use((req, res, next) => {
  req.messages = messages;
  next();
});

app.use("/", indexRouter);
app.use("/new", newRouter);

app.get("*", (req, res) => res.status(404).send("Not found"));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Mini Message Board - Server running on port ${PORT}...`);
});
