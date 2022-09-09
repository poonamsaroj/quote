const express = require("express");
const app = express();
var axios = require('axios');


app.set("view engine", "ejs")

app.get('/', (req, res, next) => {
    axios.get('https://zenquotes.io/api/quotes')
        .then(function (response) {
            res.render("index", { quote: response.data[0]["q"], name: response.data[0]["a"] })
        });
})

app.post('/', (req, res, next) => {
    axios.get('https://zenquotes.io/api/quotes')
        .then(function (response) {
            res.send(response.data)
        });
})

app.listen(process.env.PORT || 3000);