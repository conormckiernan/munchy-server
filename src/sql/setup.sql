CREATE TABLE IF NOT EXISTS Recipes (
    id          INTEGER      UNSIGNED NOT NULL AUTO_INCREMENT,
    title       VARCHAR(100) NOT NULL,
    subtitle    VARCHAR(100) NOT NULL,
    description VARCHAR(500) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO Recipes (title, subtitle, description)
    VALUES("Pork Buns", "A tasty Asian classic", "This is a description for Pork Buns");