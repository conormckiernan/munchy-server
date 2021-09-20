CREATE TABLE IF NOT EXISTS Recipes (
    id          INTEGER      UNSIGNED NOT NULL AUTO_INCREMENT,
    title       VARCHAR(100) NOT NULL,
    subtitle    VARCHAR(100) NOT NULL,
    description VARCHAR(500) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS Ingredients (
    recipeID   INTEGER UNSIGNED NOT NULL,
    ingredient VARCHAR(100) NOT NULL,
    quantity   INTEGER UNSIGNED NOT NULL,
    unit       VARCHAR(100) NOT NULL,
    FOREIGN KEY (recipeID) REFERENCES Recipes(id)
);

CREATE TABLE IF NOT EXISTS Steps (
    recipeID    INTEGER UNSIGNED NOT NULL,
    num         INTEGER UNSIGNED NOT NULL,
    description VARCHAR(1000) NOT NULL,
    FOREIGN KEY (recipeID) REFERENCES Recipes(id)
);

INSERT INTO Recipes (title, subtitle, description)
    VALUES("Pork Buns", "A tasty Asian classic", "This is a description for Pork Buns");

INSERT INTO Ingredients (recipeID, ingredient, quantity, unit)
    VALUES(1, "Pork", 1, "Pig(s)"), (1, "Buns", 6, "Buns");

INSERT INTO Steps (recipeID, num, description)
    VALUES(1, 1, "Cook Pork"), (1, 2, "Put pork in bun (x6)");