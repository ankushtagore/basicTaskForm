const express = require("express")
const { Pool } = require('pg')
const cors = require('cors');

const app = express();
const port = 3008;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: 'digiupaay',
    password: "",
    port: 5432
})

app.use(cors());
app.use(express.json());

app.get('/teams', (req, res) => {
    pool.query('SELECT * FROM teams', (error, results) => {
        if (error) {
            console.error('Error executing query:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.json(results.rows);
        }
    });
});

app.get('/teams/:teamId', (req, res) => {
    const { teamId } = req.params;
    const query = {
        text: 'SELECT * FROM members WHERE team_id = $1',
        values: [teamId],
    };

    pool.query(query, (error, results) => {
        if (error) {
            console.error('Error executing query:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.json(results.rows);
        }
    });
});

app.post('/tasks', (req, res) => {
    const { task, member_id } = req.body;

    const insertTaskQuery = {
        text: 'INSERT INTO tasks (task, member_id) VALUES ($1, $2)',
        values: [task, member_id],
    };

    pool.query(insertTaskQuery, (error) => {
        if (error) {
            console.error('Error executing query:', error);
            res.status(500).json({ error: error });
        } else {
            res.status(200).json("Successfully added the task");
        }
    });
});

// Create the tasks table if doesn't exist
pool.query(
    `CREATE TABLE IF NOT EXISTS tasks (
      id SERIAL PRIMARY KEY,
      task TEXT,
      member_id INT,
      FOREIGN KEY (member_id) REFERENCES members (id)
    );`,
    (error) => {
        if (error) {
            console.error('Error creating tasks table:', error);
        } else {
            console.log('Tasks table created successfully');
        }
    }
);


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});