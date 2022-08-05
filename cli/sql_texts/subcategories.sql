CREATE TABLE IF NOT EXISTS subcategories (
  id SERIAL PRIMARY KEY,
  nom TEXT NOT NULL,
  categorie_id Int NOT NULL,
  FOREIGN KEY (categorie_id) REFERENCES categories (id)
  )