import Express from "express";
import getDBConnection from "../db/db";
import IRecipeResponse from "../models/IRecipeReponse";

const recipeGetRoutes = Express.Router();

// Get a list of all recipes
recipeGetRoutes.get("/recipes", (req, res) => {
  getDBConnection().query('SELECT * FROM Recipes', (err, rows: string[]) => {
    if (err) throw err;

    console.log(rows);
    let resp: IRecipeResponse = { recipes: [] };
    rows.forEach((element: string) => { resp.recipes.push(element); });
    res.send(JSON.stringify(resp, null, 2));
  });
});

// Get a specific recipe
// TODO: Get more details for a recipe (steps, pictures, etc.)
recipeGetRoutes.get("/recipes/:recipeId", (req, res) => {
  getDBConnection().query(`SELECT * FROM Recipes WHERE id = ${req.params.recipeId}`, (err, rows: string[]) => {
    if (err) throw err;

    console.log(rows);
    let resp: IRecipeResponse = { recipes: [] };
    rows.forEach((element: string) => { resp.recipes.push(element); });
    res.send(JSON.stringify(resp, null, 2));
  });
});

export default recipeGetRoutes;