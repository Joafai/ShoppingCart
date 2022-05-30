const express = require("express");
const bodyParser = require("body-parser");
var connection = require("express-myconnection");
var mysql = require("mysql");

const app = express();
app.use(bodyParser.json());

app.use(
  connection(
    mysql,
    {
      host: "127.0.0.1", //'localhost',
      user: "root",
      password: "23362287Eh",
      port: 3001, //port mysql
      database: "users_products_db",
    },
    "pool"
  )
); //or single

app.listen(3000, () => {
  console.log(`app is running on port 3000`);
});
