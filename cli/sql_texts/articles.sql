CREATE TABLE IF NOT EXISTS articles (
    id SERIAL PRIMARY KEY,
    userId INT NOT NULL,
    categorie Int NOT NULL,
    subcategorie Int  NOT NULL,
    lieu Int  NOT NULL,
    description TEXT  NOT NULL,
    prix Int  NOT NULL,
    dateAdd TEXT  NOT NULL,
    FOREIGN KEY (userId) REFERENCES users (id)
)