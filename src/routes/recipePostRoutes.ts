import Express from 'express';
import ISubmitRecipeRequest from '../models/ISubmitRecipeRequest';

const recipePostRoutes = Express.Router();

recipePostRoutes.post("/submitRecipe", (req, res) => {
  var body: ISubmitRecipeRequest = req.body;
  console.log(body.title);
  res.send(body.title);
});

export default recipePostRoutes;