const express = require('express');
const app = express();

const morgan = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();
const ContactRouter = require('./src/Router/ContactRouter');


mongoose.connect(process.env.URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
    .then(console.log("Connected to MongoDB"))
    .catch(error => console.log(error));

mongoose.Promise = global.Promise;

app.use(morgan('dev'));

app.use(express.json({limit: '50mb'}));

app.use('/src/public/images',express.static('./src/public/images'));
app.use(express.static('src/public'));
app.use(cors());

// Router
app.use('/Contact', ContactRouter);

// Error handling
app.use((req, res, next)=>{
    const error = new Error('Not found');
    error.status=404;
    next(error);
});

app.use((error, req, res, next)=>{
    const errorStatus = error.status||500;
    res.status(errorStatus);
    res.json({
        error:{
            message: error.message,
            status: errorStatus
        }
    });
});

module.exports = app;

