const express = require("express");
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    console.log(req.protocol)
    console.log(req.originalUrl)
    res.send('Hi there!')
})


module.exports = app
