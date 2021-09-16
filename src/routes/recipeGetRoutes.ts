import Express from "express";
import mysql from "mysql2";
import getDBConnection from "../db/db";
import IRecipeResponse from "../models/IRecipeReponse";

const recipeGetRoutes = Express.Router();

// Get a list of all recipes
recipeGetRoutes.get("/recipes", (req, res) => {
  var connection: mysql.Connection = getDBConnection();
  connection.query('SELECT * FROM Recipes', (err, rows: string[]) => {
    if (err) throw err;

    console.log(rows);
    let resp: IRecipeResponse = { recipes: [] };
    rows.forEach((element: string) => { resp.recipes.push(element); });
    res.send(JSON.stringify(resp, null, 2));
  });

  connection.end();
});

// Get a specific recipe
// TODO: Get more details for a recipe (steps, pictures, etc.)
recipeGetRoutes.get("/recipes/:recipeId", (req, res) => {
  var connection: mysql.Connection = getDBConnection();
  connection.query(`SELECT * FROM Recipes WHERE id = ${req.params.recipeId}`, (err, rows: string[]) => {
    if (err) throw err;

    console.log(rows);
    let resp: IRecipeResponse = { recipes: [] };
    rows.forEach((element: string) => { resp.recipes.push(element); });
    res.send(JSON.stringify(resp, null, 2));
  });

  connection.end();
});

export default recipeGetRoutes;