import Express from 'express';
import ISubmitRecipeRequest from '../models/ISubmitRecipeRequest';
import getDBConnection from '../db/db';

const recipePostRoutes = Express.Router();

// POST route for submitting a new recipe
recipePostRoutes.post("/submitRecipe", (req, res) => {
  var body: ISubmitRecipeRequest = req.body;
  getDBConnection().execute(
    "INSERT INTO Recipes (title, subtitle, description) VALUES(?, ?, ?)",
    [body.title, body.subtitle, body.description]
  );
  res.end();
});

export default recipePostRoutes;