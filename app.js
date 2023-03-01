const express = require("express");
const app = express();

app.use(express.json());

app.use((req, res, next) => {
    console.log(req.protocol);
    console.log(req.originalUrl);
    res.send();
    next();
})


module.exports = app
