require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => { console.log('MongoDB connected succesfully.'); 
}).catch(err => { console.log(err)})

app.listen(process.env.PORT, () => { console.log('Server is up and running on port ', process.env.PORT); })