let prefix = "!";
const active = new Map()
const db = require('quick.db');
const { orange, green } = require('../../colors.json');
const { RichEmbed } = require('discord.js');

  module.exports = async (client, message) => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    let fetched = await db.fetch(`prefix_${message.guild.id}`)
      if(fetched === null) prefix = '^'
        else prefix = fetched
    
      let amt1 = Math.floor(Math.random() * 100) + 1;
      let amt2 = Math.floor(Math.random() * 100) + 1;
      let final = Math.floor(Math.random() * 10000) + 1;

        if(amt1 === amt2) {
          let embed = new RichEmbed()
            .setColor(green)
            .setDescription(`**${message.author.tag}** Just earned **${final}** 𝓐.`)
          db.add(`usrCash_${message.author.id}`, final);
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