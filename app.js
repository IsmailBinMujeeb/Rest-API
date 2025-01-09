const express = require('express');
require('dotenv').config();
const conn = require('./config/db');

// Routes
const rootRouter = require('./routes/rootRouter');
const userRouter = require('./routes/userRouter');
const singleUserRouter = require('./routes/singleUserRouter');
const createUserRouter = require('./routes/createUserRouter');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes Declaration
app.use('/', rootRouter);
app.use('/users', userRouter);
app.use('/users/:id', singleUserRouter);
app.use('/create', createUserRouter)

app.listen(PORT);