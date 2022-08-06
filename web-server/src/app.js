const path = require("path");
const express = require("express");
const hbs = require("hbs");

// console.log(__dirname);
// .. to go up 1 directory
// console.log(path.join(__dirname, "../public"));
const app = express();

// Define paths for express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialPath = path.join(__dirname, "../templates/partials");

// Set up handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialPath);

// Set up static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather",
    name: "Anushka",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Me",
    name: "Anushka",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    helpText: "This is some helpful text",
    title: "Help",
    name: "Anushka",
  });
});

// app.get("", (req, res) => {
//   res.send("<h1>Weather</h1>");
// });

// app.get("/help", (req, res) => {
//   res.send({
//     name: "Andrew",
//     age: 27,
//   });
// });

// app.get("/about", (req, res) => {
//   res.send("<h1>About</h1>");
// });

app.get("/weather", (req, res) => {
  res.send({
    forecast: "It is 50 degrees",
    location: "Philadelphia",
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404 help",
    name: "Anushka",
    errorMessage: "Help article not found",
  });
});

// * means match anything which has not been matched so far
app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Anushka",
    errorMessage: "Page not found",
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
