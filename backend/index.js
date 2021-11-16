const express = require('express');
const app = express();
const routes = require('./routes');
const cors = require('cors');
const path = require('path');
const port = 3333;
const conn = require('./src/Database/Connection');
require('dotenv').config({
    path: path.resolve(__dirname, ".env")
});

app.use(cors());
app.listen(port);
app.use(routes);

conn.initializeDatabase();