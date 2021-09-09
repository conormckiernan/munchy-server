import Express from "express";
import dbConnection from "../db/db";
import IRecipeResponse from "../models/IRecipeReponse";

const recipeGetRoutes = Express.Router();

recipeGetRoutes.get("/recipes", (req, res) => {
  dbConnection.query('SELECT * FROM Recipes', (err, rows: string[]) => {
    if (err) throw err;

    console.log(rows);
    let resp: IRecipeResponse = { recipes: [] };
    rows.forEach((element: string) => { resp.recipes.push(element); });
    res.send(JSON.stringify(resp, null, 2));
  });
});

recipeGetRoutes.get("/recipes/:recipeId", (req, res) => {
  dbConnection.query(`SELECT * FROM Recipes WHERE id = ${req.params.recipeId}`, (err, rows: string[]) => {
    if (err) throw err;

    console.log(rows);
    let resp: IRecipeResponse = { recipes: [] };
    rows.forEach((element: string) => { resp.recipes.push(element); });
    res.send(JSON.stringify(resp, null, 2));
  });
});

export default recipeGetRoutes;