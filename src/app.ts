import express from "express";
import waitOn from "wait-on";
import mysql from "mysql2";

const app = express();
const port: number = 3000;

const {
  MYSQL_HOST: HOST,
  MYSQL_HOST_FILE: HOST_FILE,
  MYSQL_USER: USER,
  MYSQL_USER_FILE: USER_FILE,
  MYSQL_PASSWORD: PASSWORD,
  MYSQL_PASSWORD_FILE: PASSWORD_FILE,
  MYSQL_DB: DB,
  MYSQL_DB_FILE: DB_FILE,
} = process.env;

var connection;

console.log("Server is starting");
waitOn({ resources: ["tcp:mysql:3306"] })
  .then(() => {
   
    connection = mysql.createConnection({
      host: HOST,
      user: USER,
      password: PASSWORD,
      database: DB
    })

    connection.connect;

    app.get("/", (req, res) => res.send("Hello, world!"));
    app.get("/recipes", (req, res) => res.send("List of all recipes :)"));
    app.get("/recipes/:recipeId", (req, res) => res.send(req.params.recipeId));
    app.listen(port, () => {
      return console.log(`Server is listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(`Error while waiting for port: ${err}`);
  });