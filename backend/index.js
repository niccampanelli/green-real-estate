const express = require('express');
const app = express();
const port = 3333;
const routes = require('./routes');
const cors = require('cors');

app.listen(port);

app.use(routes);
app.use(cors);