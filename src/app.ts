import express from "express";
import waitOn from "wait-on";

import recipeGetRoutes from './routes/recipeGetRoutes';
import recipePostRoutes from "./routes/recipePostRoutes";

const server = express();
const port: number = 3000;

server.use(express.urlencoded({extended: true}));
server.use(express.json());

// Use routes we specify in the other files
server.use("/", recipeGetRoutes);
server.use("/", recipePostRoutes);

console.log("Server is starting");

// Wait for the mysql container's port 3306 to become available
waitOn({ resources: ["tcp:mysql:3306"] })
  .then(() => {
    // Start listening on local port specified above
    server.listen(port, () => {
      return console.log(`Server is listening on port ${port}`);
    });
  })
  .catch((err) => {
    // Print any errors that get caught
    console.log(`Error while waiting for port: ${err}`);
  });