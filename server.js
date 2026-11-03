const express = require('express');
const app = express();
const server = require('http').createServer(app);
const port = 443;

app.get("/",(req,res)=>{
  res.sendFile(__dirname + "/public/index.html");
});


app.get("/test",(req,res)=>{
  res.sendFile(__dirname + "/public/test.html");
});

server.listen(port);