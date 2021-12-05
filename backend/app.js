var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require('mongoose');
const bodyParser = require('body-parser');
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var postsRoute = require('./routes/posts');
var cors = require('cors');
var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors());
app.use("/index", indexRouter);
app.use("/users", usersRouter);
app.use("/posts", postsRoute);


//middlewares


//routes 
app.get("/", (req, res) => {
    res.send("This is home");
});


mongoose.connect('mongodb+srv://KALD:KALD@kald.ee28e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true }, () => console.log("Connecté à la BDD"))
app.listen(3000);
module.exports = app;
