const express = require('express');
const cors = require('cors');
const cookies = require("cookie-parser");
const routes = require('./routes');
const app = express();
const port = 3333;

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(cookies());
app.use(express.json());
app.use(routes);
app.listen(port);
app.use(express.static("public"));