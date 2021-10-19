const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();


const PORT = process.env.PORT || 3000;
app.use(express.static('public'));
//console.log(__dirname);
app.use(express.json());
const connectDB = require('./config/db.js');
connectDB();

//cors
const corsOprtions = {
    origin: process.env.ALLOWED_CLIENTS.split(',')
}
app.use(cors(corsOprtions));
//template engine is
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
//routes

app.use('/api/files', require('./routes/files.js'));

app.use('/files', require('./routes/show.js'));
app.use('/files/download', require('./routes/download'));


app.listen(PORT, console.log(`Listening on port ${PORT}`));