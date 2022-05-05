const express = require('express');
require('dotenv').config();

const Router = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(Router);

app.listen(PORT, () => console.log(`running on port: ${PORT}`));
