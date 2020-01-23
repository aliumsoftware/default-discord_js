const { Client, Collection, message } = require("discord.js");
const client = new Client();

  ["aliases", "commands"].forEach(x => (client[x] = new Collection()));
  ["command", "events"].forEach(x => require(`./handlers/${x}`)(client));

client.login(process.env.DTOKEN);
require("http").createServer(async (req,res) => { res.statusCode = 200; res.write("Welcome to the Aiden discord bot!"); res.end(); });

const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received. :D");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
client.on("guildCreate", guild => {
  // This event triggers when the bot joins a server.
  console.log(
    `New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`
  )
message.channel.send(`Hey thdere! Thank you for adding me to your Discord! Please copy this and paste this into a channel that I can see to set me up. **^prefix !**, please note the bot won't be fully set up until that command is ran and that you must have administrator permissions on this discord to run it. If you have any questions, visit https://invite.gg/aiden or https://discord.gg/RS4VceB.`)
;
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});
//"binding": "^3.0.3",
//"condense-keys": "^2.0.0",