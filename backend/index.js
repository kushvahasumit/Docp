const express = require('express');
const mysql = require('mysql2/promise');

const app = express();
const port = process.env.PORT || 4000

async function getDbConnection() {
  return mysql.createConnection({
    host: process.env.DB_HOST ,
    user: process.env.DB_USER ,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });
}

app.get('/', (req, res) => res.send('Hello from backend!'));
app.get('/items', async (req, res) => {
  const conn = await getDbConnection()
  const [rows] = await conn.query('SELECT id, name FROM items LIMIT 100')
  await conn.end()
  res.json(rows)
})

app.listen(port, () => console.log(`Backend listening on ${port}`));
