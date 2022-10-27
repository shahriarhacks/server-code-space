const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require("./data/category.json");
const courses = require("./data/courses.json");
const question = require("./data/question.json");

app.get("/", (req, res) => {
  res.send("Server is ready to fight");
});

app.get("/course-category", (req, res) => {
  res.send(categories);
});

app.get("/category/:id", (req, res) => {
  const id = req.params.id;
  const category_course = courses.filter((c) => c.category_id === id);
  res.send(category_course);
});

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.get("/courses/:id", (req, res) => {
  const id = req.params.id;
  const course = courses.find((c) => c._id === id);
  res.send(course);
});

app.get("/questions", (req, res) => {
  res.send(question);
});

app.get("/faq", (req, res) => {
  res.send(question);
});

app.listen(port, () => {
  console.log("port is running", port);
});
