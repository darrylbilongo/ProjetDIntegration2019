const express = require('express');

const mongoose = require('mongoose');

const cors = require('cors');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());


const port = process.env.PORT || 5000;

const uri = process.env.SRV_URI;
mongoose.connect(uri, {useNewUrlParser: true,
                        useCreateIndex: true,
                        useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

const userRouter = require('./routes/users');
const positionsRouter = require("./routes/positions");
const devicesRouter = require("./routes/devices");
const parentRouter = require('./routes/parent');
const animateurRouter = require('./routes/animateur');
const eventRouter = require('./routes/event');
const fonctionRouter = require('./routes/fonction');


app.use('/api/users', userRouter);
app.use('/api/positions', positionsRouter);
app.use('/api/devices', devicesRouter);
app.use('/api/users', userRouter);
app.use('/api/event', eventRouter);
app.use('/api/parent', parentRouter);
app.use('/api/parent', animateurRouter);

app.use('/api/fonctions', fonctionRouter);

app.listen(port,function(){
    console.log('Server is running on port: ' + port)
})

