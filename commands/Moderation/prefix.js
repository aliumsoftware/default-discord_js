const { RichEmbed } = require('discord.js');
const { orange, red } = require('../../colors.json');
var fs = require("fs");
var path = require('path');

  module.exports = {
    config: {
      name: 'prefix',
      aliases: ['setPrefix', 'prefixset'],
      usage: '^prefix (prefix)',
      description: 'Sets the guild\'s prefix.',
      category: 'Moderation',
      accessableby: 'Administrator+'
    },
    
  run: async (client, message, args) => {
    let jsonPath = path.join(__dirname, '..', '..','Servers', message.guild.id + ".json");
    if ((fs.existsSync(jsonPath))) {
    let json = JSON.parse(fs.readFileSync(jsonPath))
  let error = client.emojis.get(':x:');
  let check = client.emojis.get(':white_check_mark:');
    
    
    let embed = new RichEmbed()
      embed.setColor(red)
      embed.setDescription(`You don't have the vaild permissions to use this command!`)
  if(!message.member.hasPermission(['ADMINISTRATOR', 'MANAGE_GUILD']) || !message.guild.owner) return message.channel.send(embed);
  if(!args[0]) {
    const e = new RichEmbed()
      e.setColor(red)
      e.setDescription(`You need to supply and argument for me to change the prefix to.`)
    return message.channel.send(e);
  }
   else {
    json.prefix = args.slice(0).join(' ')
    fs.writeFile(jsonPath, JSON.stringify(json), (err) => {
    if (err) {
        message.channel.send(err);
        return;
    };
});
      let ok = new RichEmbed()
        ok.setColor(orange)
        ok.setDescription(`Prefix was successfully set to: \`` + json.prefix + `.\nMention me when you need to know the prefix if you forget it..`)
      return message.channel.send(ok)
      }
   
    

    }
    else {
      let json = {prefix: args[0]}
        fs.writeFile(jsonPath, JSON.stringify(json), (err) => {
        if (err) {
           err;
        }
          else {return message.channel.send("Created new file for server ")}
      });
    
     
    }
    }
  }