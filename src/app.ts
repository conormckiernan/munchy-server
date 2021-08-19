import express from "express";
import waitOn from "wait-on";

const app = express();
const port: number = 3000;

console.log("Server is starting");
waitOn({ resources: ["tcp:mysql:3306"] })
  .then(() => {
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