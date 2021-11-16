const express = require('express');
const cors = require('cors');
const path = require('path');
const routes = require('./routes');
const app = express();
const port = 3333;

require('dotenv').config({
    path: path.resolve(__dirname, ".env")
});

app.use(cors());
app.use(routes);
app.listen(port);