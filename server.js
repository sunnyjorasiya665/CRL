const express = require("express");
const path = require("path");
const app = express();
const PORT = 2005;

// Serve the static files/folder
app.use(express.static(path.join(__dirname, "public")));

// Set the view engine to ejs
app.set("view engine", "ejs");

// Route to home page
app.get("/:id(home)?", (req, res) => {
  res.render("home");
});

// Render/route to projects page
app.get("/projects", (req, res) => {
  res.render("projects");
});

// Render/route to teams page
app.get("/team", (req, res) => {
  res.render("team");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
