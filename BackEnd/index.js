const express = require("express");
const mongoose = require('mongoose')
const url = 'mongodb://localhost/budget'

const app = express();
const port = 3000;

mongoose.connect(url, { useNewUrlParser: true })
const con = mongoose.connection

con.on('open',()=> {
  console.log("connected...")
})

app.use(express.json())

// const bodyParser = require("body-parser");

// const register = require("./routes/register-routes");
const login = require("./routes/login-routes");
const main = require("./routes/main-routes");

// app.use("/register", register);
app.use("/login", login);
app.use("/main", main);



app.listen(port, () => {
  console.log("Server Started...");
});
