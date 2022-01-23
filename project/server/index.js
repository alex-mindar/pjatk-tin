const express = require('express');
const path = require('path');
const mongoose = require("mongoose");
const app = express();

const Manager = require('./models/Manager').Manager;

const port = process.env.PORT || 3000;

const DIST_DIR = path.join(__dirname, '../dist');

app.use(express.static(DIST_DIR));
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/tin-project?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.1.9',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection failed: "));
db.once("open", function() {
  console.log("MongoDB connected successfully");
});

app.get('/', async (req, res) => {
    res.status(200).send('Hello World from the server!');
});

app.get('/test-fetch', async (req, res) => {
    const test = await Manager.find({});
    res.status(200).json(test);
})

app.listen(port, function () {
    console.log('App listening on port: ' + port);
});