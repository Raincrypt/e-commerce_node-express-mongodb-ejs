const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

const port = process.env.port || 5000;
const uri =
  "";

// Contect DB
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`Connected to DB`))
  .catch((err) => console.log(err));

// Setting the view
app.set("view engine", "ejs");
app.set("views", __dirname + "/views/pages");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Routes
app.use("/", require("./routes/userRoute"));

// Setup the server
app.listen(port, () => {
  console.log(`Listening on Port: ${port}`);
});
