const { RichEmbed } = require('discord.js');
const { orange, red } = require('../../colors.json');
const db = require('quick.db');

  module.exports = {
    config: {
      name: 'addcoins',
      aliases: ['addmoney', 'addmoola'],
      usage: '^addcoins (@user) (amount to add)',
      description: 'For the bot owner to add coins to people.',
      category: 'Owner',
      accessableby: 'Bot Owner'      
    },
    
  run: async (client, message, args) => {
    
    if(message.author.id === '535585397435006987') {
      try {
        
let usr = message.mentions.members.first() || message.guild.members.get(args[0]);
const embed = new RichEmbed()
  let coins = await db.fetch(`usrCash_${usr.id}`)
    if(coins === null) coins = 0;
        
        if(!usr || !args[0]) {
          embed.setColor(red)
          embed.setDescription(`${client.emojis.get(":x:")} I need a user to add coins too.`)
          
          return message.channel.send(embed);
        };
        
        if(!args[1] || isNaN(args[1])) {
          embed.setColor(red)
          embed.setDescription(`${client.emojis.get(":x:")} I need an amount to add to them. Or you didn't add a number.`)
          
          return message.channel.send(embed)
        };
        let bal = Number(args[1])
        db.add(`usrCash_${usr.id}`, bal);
        
        embed.setColor(orange)
        embed.setDescription(`${client.emojis.get(':x:')} That user has been given: **${args[1]} ₪**`)
        
        return message.channel.send(embed);
        
      } catch(e) {
        const embed = new RichEmbed()
          .setColor(red)
          .setDescription(`${client.emojis.get(":x:")} Something went wrong! Here is the error:

          \`${e.message}\``)
        return message.channel.send(embed);
      };
      
    } else {
      if(!message.guild.me.hasPermission(["ADMINISTRATOR", "ADD_REACTIONS"])) return;
        return message.react(client.emojis.get(":check:"));
      };
    }
  }