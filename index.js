const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
const Dbconnection = require('./Database/connexion');
Dbconnection().then(() => {
    app.listen(process.env.PORT, () => {
        console.log("app is running on port ", process.env.PORT);
    })
    console.log("we connect to MongoDB");
}).catch((err) => {
    console.log("we could not connect to MongoDB", err);
    process.exit(1);
});
const USERS = require("./Routes/user");
app.use('/users', USERS);
//
//
const UserSchema = require("./Models/user");
//
app.get("/", (req, res) => {
    res.send("Welcome to MongoDB!");
})
//
app.get("/users", (req, res) => {
    res.send("Welcome to Users!");
})