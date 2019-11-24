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
        
      } catch(e) {
        
      }
      
    } else {
      
      }
    }
  }