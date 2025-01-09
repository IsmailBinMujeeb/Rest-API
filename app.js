const express = require('express');
require('dotenv').config();
const conn = require('./config/db');

// Routes
const rootRouter = require('./routes/rootRouter');
const userRouter = require('./routes/userRouter');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes Declaration
app.use('/', rootRouter);
app.use('/users', userRouter);

app.listen(PORT);