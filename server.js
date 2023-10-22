const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();

const port = process.env.port || 5000;
const uri = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.jvfh68q.mongodb.net/?retryWrites=true&w=majority`;

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

// Render Signin/Login Page
app.get("/", (req, res) => {
  res.render("index.ejs");
});

// Routes
app.use("/auth", require("./routes/userRoutes"));

// Setup the server
app.listen(port, () => {
  console.log(`Listening on Port: ${port}`);
});
