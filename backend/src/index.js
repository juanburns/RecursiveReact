const express = require("express");
const app = express();
const morgan = require("morgan");
const family = require("./routes/family");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

app.use("/familyTree", family);

app.listen(3002, () => {
  console.log("Listening on port 3002");
});
