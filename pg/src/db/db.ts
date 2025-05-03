import { Pool } from 'pg';

export const pool = new Pool({
  user: 'postgres',             // your PostgreSQL username
  host: 'localhost',            // host, usually localhost for local DB
  database: 'todo',         // your database name
  password: 'rootpsql',    // your PostgreSQL password
  port: 3000,                   // default PostgreSQL port
});

const createTableQuery = `
CREATE TABLE IF NOT EXISTS todo (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
`;

pool.query(createTableQuery)
  .then(() => {
    console.log('Table created or already exists');
  })
  .catch(err => {
    console.error('Error creating table:', err.stack);
  });
