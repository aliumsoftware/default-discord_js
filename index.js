const { Client, Collection } = require("discord.js");
const client = new Client();

  ["aliases", "commands"].forEach(x => (client[x] = new Collection()));
  ["command", "events"].forEach(x => require(`./handlers/${x}`)(client));

client.login(process.env.DTOKEN);
require("http").createServer(async (req,res) => { res.statusCode = 200; res.write("Welcome to the Aiden discord bot!"); res.end(); });

const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);