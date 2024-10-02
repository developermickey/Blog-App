const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const userModel = require("./models/User");
const postModel = require("./models/Post");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});
app.get("/blog", (req, res) => {
  res.render("blog");
});

app.listen(port, () => {
  console.log(`Server is running port ${port}`);
});
