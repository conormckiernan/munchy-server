import Express from 'express';
import ISubmitRecipeRequest from '../models/ISubmitRecipeRequest';
import getDBConnection from '../db/db';
import mysql from 'mysql2';

const recipePostRoutes = Express.Router();

// POST route for submitting a new recipe
recipePostRoutes.post("/submitRecipe", (req, res) => {
  var body: ISubmitRecipeRequest = req.body;
  var connection: mysql.Connection = getDBConnection();

  connection.execute(
    "INSERT INTO Recipes (title, subtitle, description) VALUES(?, ?, ?)",
    [body.title, body.subtitle, body.description]
  );

  connection.end();
  res.end();
});

export default recipePostRoutes;