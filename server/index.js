const express = require("express");
const bodyParser = require("body-parser");
const bagelController = require("./controllers/bagelController");

const app = express();
app.use(bodyParser.json());

// app.get is an endpoint, part of REST to create CRUD
app.get("/api/bagels", bagelController.getBagels);
app.post("/api/bagel", bagelController.addBagel);

const PORT = 4000;
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));

// have to change in package.json under "main" = "server/index.js" otherwise nodemon will not run
