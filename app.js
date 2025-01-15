const express = require("express");
const path = require("node:path");
const app = express();

const indexRouter = require("./routes/indexRouter");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);

app.get("*", (req, res) => res.status(404).send("Not found"));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Mini Message Board - Server running on port ${PORT}...`);
});
