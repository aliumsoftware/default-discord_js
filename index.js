const { Client, Collection } = require("discord.js");
const client = new Client();

  ["aliases", "commands"].forEach(x => (client[x] = new Collection()));
  ["command", "events"].forEach(x => require(`./handlers/${x}`)(client));

    //client.login(process.env.DTOKEN)