const { RichEmbed } = require('discord.js');
const { orange, red } = require('../../colors.json');
const ms = require('parse-ms');
const db = require('quick.db')

  module.exports = {
    config: {
      name: 'beg',
      aliases: ['gimmemoney', 'begging'],
      usage: '^beg',
      description: 'That\'s one way to do that.',
      category: 'Economy',
      accessableby: 'Users'      
    },
    
  run: async (client, message, args) => {
let timeout = 3600000;
let amt = Math.floor(Math.random() * 1000) + 1;
const embed = new RichEmbed()

  let beg = await db.fetch(`beg_${message.author.id}`);
        if(beg !== null && timeout - (Date.now() - beg) > 0) {
            let time = ms(timeout - (Date.now() - beg))
      
          embed.setColor(red)
          embed.setDescription(`You can beg again in: \`${time.hours}h ${time.minutes}m ${time.seconds}s\`.`)
          
          return message.channel.send(embed).then(m => {m.delete(10000)})
      } else {
        db.set(`beg_${message.author.id}`, Date.now());
        
        embed.setColor(orange)
        embed.setDescription(`The Cube Gods decided to donate you **${amt} ₪**`)
        db.add(`usrCash_${message.author.id}`, amt)
        
        return message.channel.send(embed)
      }
    }
  }