import express from "express";
import waitOn from "wait-on";
import mysql from "mysql2";

interface RecipeListResponse {
  recipes: string[];
}

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

const app = express();
const port: number = 3000;

var connection: mysql.Connection;

app.get("/", (req, res) => res.send("Hello, world!"));
app.get("/recipes", (req, res) => {
  connection.query('SELECT * FROM Recipes', (err, rows: string[], fields) => {
    if (err) throw err;

    console.log(rows);
    let resp: RecipeListResponse = {recipes: []};
    rows.forEach((element: string) => { resp.recipes.push(element) });
    res.send(JSON.stringify(resp, null, 2));
  });
});

app.get("/recipes/:recipeId", (req, res) => res.send(req.params.recipeId));

console.log("Server is starting");
waitOn({ resources: ["tcp:mysql:3306"] })
  .then(() => {

    connection = mysql.createConnection({
      host: HOST,
      user: USER,
      password: PASSWORD,
      database: DB
    })

    connection.connect();

    app.listen(port, () => {
      return console.log(`Server is listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(`Error while waiting for port: ${err}`);
  });