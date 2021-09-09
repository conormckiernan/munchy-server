import express from "express";
import waitOn from "wait-on";
import mysql from "mysql2";

import recipeGetRoutes from './routes/recipeGetRoutes';
import recipePostRoutes from "./routes/recipePostRoutes";

const app = express();
const port: number = 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use("/", recipeGetRoutes);
app.use("/", recipePostRoutes);

console.log("Server is starting");
waitOn({ resources: ["tcp:mysql:3306"] })
  .then(() => {
    app.listen(port, () => {
      return console.log(`Server is listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(`Error while waiting for port: ${err}`);
  });