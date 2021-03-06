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
const eventRouter = require('./routes/event');

app.use('/positions', positionsRouter);
app.use('/devices', devicesRouter);
app.use('/users', userRouter);
app.use('/event', eventRouter);


app.listen(port,function(){
    console.log('Server is running on port: ' + port)
})

