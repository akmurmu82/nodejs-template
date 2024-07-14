// import packages
const express = require("express");
const connection = require("./config/db");
const cors = require("cors");
require("dotenv").config();

// Environmental variable
const mongo_uri = process.env.MONGO_URI; // setup the mongoURI first
const port = process.env.PORT;

// intialising server/app
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// main route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Server" });
});

// listening server
app.listen(port, async () => {
  try {
    await connection(mongo_uri);
    console.log(`listening on port ${port} and connected to db`);
  } catch (error) {
    console.log(error);
  }
});
