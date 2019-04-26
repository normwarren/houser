// IMPORTS
const massive = require("massive");
require("dotenv").config();
const express = require("express");
const houseCtrl = require("./house_controller");
const app = express();
const { SERVER_PORT, CONNECTION_STRING } = process.env;

// TOP LEVEL MIDDLEWARE
app.use(express.json());

// ENDPOINTS
app.get("/api/houses", houseCtrl.getHouses);
app.post("/api/house", houseCtrl.addHouse);
app.delete("/api/house/:id", houseCtrl.delete);

// CONNECT TO DATABASE
massive(CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
  })
  .catch(err => console.log(err));

// START THE SERVER
app.listen(SERVER_PORT, () => {
  console.log(`${SERVER_PORT} server is running ! `);
});
