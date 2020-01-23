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
    
      let amt1 = Math.floor(Math.random() * 100) + 1;
      let amt2 = Math.floor(Math.random() * 100) + 1;
      let final = Math.floor(Math.random() * 10000) + 1;

        if(amt1 === amt2) {
          let embed = new RichEmbed()
            .setColor(green)
            .setDescription(`**${message.author.tag}** Just earned **${final}** 𝓐.`)
          let json2
      let jsonPath2 = path.join(__dirname, '..', '..','Users', message.author.id);
      let jsonPath2D = path.join(__dirname, '..', '..', 'user.json');
    if (fs.existsSync(jsonPath2))
    json2 = JSON.parse(fs.readFileSync(jsonPath2))
          else json2 = JSON.parse(fs.readFileSync(jsonPath2D))
          json2.balance += final;
          fs.writeFile(jsonPath2, JSON.stringify(json2), (err) => {
        if (err) {
          message.channel.send(err);
          return;
        };
      });
          return message.channel.send(embed).then(m => {m.delete(10000)})
        }
    
    
    
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