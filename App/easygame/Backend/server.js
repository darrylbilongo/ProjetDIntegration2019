const express = require('express');

const mongoose = require('mongoose');

const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true,
                        useCreateIndex: true,
                        useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

const userRouter = require('./routes/users');
const fonctionRouter = require('./routes/fonctions');
const totemRouter = require('./routes/totems');
const planningRouter = require('./routes/plannings');

app.use('/users', userRouter);
app.use('/fonctions', fonctionRouter);
app.use('/totems', totemRouter);
app.use('/plannings', planningRouter);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})