const express = require("express");
const path = require("path");
const bodyparser = require("body-parser");

const app = express();

app.use(express.static(path.join(__dirname,"static")));

app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, "index.html"));
})
app.post("/", bodyparser.urlencoded(), (req,res) => {
    res.redirect("/?access_token="+req.body.access_token);
})
app.get("/login", (req,res) => {
    res.sendFile(path.join(__dirname, "login.html"));
})
app.get("/signup", (req,res) => {
    res.sendFile(path.join(__dirname, "signup.html"));
})
app.get("/reset-password", (req,res) => {
    res.sendFile(path.join(__dirname, "reset_password.html"));
})


app.post("/callback", express.urlencoded(), (req,res) => {
    res.redirect("/?access_token="+req.body.access_token);
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => { console.info("Server is running!"); })