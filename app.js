const express = require('express');
require('dotenv').config();
const cors = require('cors');

const { sequelize } = require('./src/models');
sequelize.sync();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`server is running on port: ${port}`));
