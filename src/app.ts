import express from "express";

import recipeGetRoutes from './routes/recipeGetRoutes';
import recipePostRoutes from "./routes/recipePostRoutes";

const server = express();
const port: number = 3000;

server.use(express.urlencoded({ extended: true }));
server.use(express.json());

// Use routes we specify in the other files
server.use("/", recipeGetRoutes);
server.use("/", recipePostRoutes);

console.log("Server is starting");


server.listen(port, () => console.log(`Server is listening on port ${port}`));