require("dotenv").config();
const express = require('express');
const path = require ('path');

const cors = require('cors');
const passport = require('passport');
const cookieSession = require('cookie-session');
const passportSetup = require('./passport');
const authRoute = require("./routes/auth");
const { Users, Trips, Weather } = require('./db/index')
const clientPath = path.resolve(__dirname, '..', 'dist');
//const port = 8080;


const app = express();

app.use(express.static(clientPath));

app.use(
    cookieSession({
        name: "session",
        keys: ["weekender"],
        maxAge: 24 * 60 * 60 * 100,
    })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
    cors({
        origin: "http://localhost:3000",
        methods: "GET,POST,PUT,DELETE",
        credentials: true,
    })
);

app.use("/auth", authRoute);

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`Listening on PORT: ${port}`);
})