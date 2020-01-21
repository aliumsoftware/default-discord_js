const { Client, Collection } = require("discord.js");
const client = new Client();

  ["aliases", "commands"].forEach(x => (client[x] = new Collection()));
  ["command", "events"].forEach(x => require(`./handlers/${x}`)(client));

client.login(process.env.DTOKEN);
require("http").createServer(async (req,res) => { res.statusCode = 200; res.write("Welcome to the Aiden discord bot!"); res.end(); });