import { Pool } from 'pg';

export const pool = new Pool({
  connectionString: 'postgresql://posttodo_owner:npg_peL6vhwA1iXa@ep-restless-sky-a4ty5fyg-pooler.us-east-1.aws.neon.tech/posttodo?sslmode=require',
  ssl: {
    rejectUnauthorized: false
  }
});

const createTableQuery = `
  CREATE TABLE IF NOT EXISTS tasks (
    id SERIAL PRIMARY KEY,
    task_name VARCHAR(255) NOT NULL,
    task_status VARCHAR(50) DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
`;

// Create the table by executing the query
pool.query(createTableQuery)
  .then(res => {
    console.log('Table created or already exists');
  })
  .catch(err => {
    console.error('Error creating table', err.stack);
  });
