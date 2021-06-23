CREATE TABLE IF NOT EXISTS Recipe (
    id          INTEGER      UNSIGNED NOT NULL AUTO_INCREMENT,
    title       VARCHAR(100) NOT NULL,
    subtitle    VARCHAR(100) NOT NULL,
    description VARCHAR(500) NOT NULL,
    PRIMARY KEY (id)
);