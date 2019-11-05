const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());


const uri = process.env.SRV_URI;
mongoose.connect(uri, {useNewUrlParser: true,
                        useCreateIndex: true,
                        useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});


// Routes
const usersRouter = require('./routes/users');
const animateurRouter = require('./routes/animateur');

app.use('/users', usersRouter);
app.use('/users', animateurRouter);
// app

app.listen(port, () => {
    console.log(`Server running on port : ${port}`);
});