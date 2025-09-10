require("dotenv").config();
console.log(process.env.MONGO_URI);
const express = require("express");
const users = require("./data/users.json");

//import database connection file
const Dbconnection = require("./databaseConnection");

//import routes
const usersRouter = require("./routes/users");
const booksRouter = require("./routes/books");

const app = express();

Dbconnection();

const PORT = 8000;

app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.status(200).send({ message: "Home page" });
});
// Use routes
app.use("/users", usersRouter);
app.use("/books", booksRouter);

// Start server
app.listen(PORT, () => {
  console.log(`server is up and running on http://localhost:${PORT}`);
});
