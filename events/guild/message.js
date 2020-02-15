let prefix = "!";
const active = new Map()
var fs = require("fs");
var path = require('path');
const { orange, green } = require('../../colors.json');
const { RichEmbed } = require('discord.js');

  module.exports = async (client, message) => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    let json
    let jsonPath = path.join(__dirname, '..', '..','Servers', message.guild.id + ".json");
    if (fs.existsSync(jsonPath))
    json = JSON.parse(fs.readFileSync(jsonPath))
    else json = {prefix: "^"};
    let fetched = json.prefix;
      if(fetched === null) prefix = '^'
        else prefix = fetched
    
     
    
      if(message.channel.type === 'dm') return;
      if(message.isMemberMentioned(client.user)) return message.reply(`The guild prefix is: \`${fetched || '^'}\`. You can change it with the prefix command.`)
      if(!message.content.startsWith(prefix)) return;
      if(message.author.bot) return;
    let command = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));
    let ops = {
      active: active
    }
      if(command) 
        command.run(client, message, args, ops);
  }