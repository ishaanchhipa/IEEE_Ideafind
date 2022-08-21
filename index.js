require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded( {extended:true}));

app.use(express.static("public"));

app.listen(process.env.PORT || 3000, function(req, res) {
    console.log('Server started at port 3000');
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});