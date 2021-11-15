const express = require('express');
const app = express();
const routes = require('./routes');
const cors = require('cors');
const port = 3333;
const conn = require('./src/Database/Connection');

app.listen(port);
app.use(express.json());
app.use(routes);
app.use(cors);

conn.initializeDatabase();