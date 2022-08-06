CREATE TABLE IF NOT EXISTS articles (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    categorie Int NOT NULL,
    subcategorie Int  NOT NULL,
    lieu Int  NOT NULL,
    description TEXT  NOT NULL,
    prix Int  NOT NULL,
    is_active BOOL DEFAULT true,
    is_publier  BOOL DEFAULT false,
    is_publicite BOOL DEFAULT false,
    is_satisfied BOOL DEFAULT false,
    is_rejected BOOL DEFAULT false,
    extra_options JSON,
    dateAdd DATE NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users (id)
)