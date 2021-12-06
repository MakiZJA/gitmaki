//Defining express consts and creating a server port. Then checking if the server is working
const express = require("express");
const app = express();

const PORT = 8080;

app.listen(PORT, () => console.log("server lytter på port " + PORT));