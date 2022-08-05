CREATE TABLE IF NOT EXISTS tokens (
    id SERIAL PRIMARY KEY,
    userId Int NOT NULL,
    token TEXT NOT NULL,
    expire_date Int  NOT NULL,  
    isActive Int  NOT NULL
)