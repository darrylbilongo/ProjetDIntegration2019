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
const fonctionRouter = require('./routes/fonctions');
const totemRouter = require('./routes/totems');
const planningRouter = require('./routes/plannings');

app.use('/api/users', userRouter);
app.use('/api/fonctions', fonctionRouter);
app.use('/api/totems', totemRouter);
app.use('/api/plannings', planningRouter);
app.use('/api/positions', planningRouter);


app.listen(port,function(){
    console.log('Server is running on port: ' + port)
})

