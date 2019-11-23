const { RichEmbed } = require('discord.js');
const { orange } = require('../../colors.json');
const db = require('quick.db');

  module.exports = {
    config: {
      name: 'leaderboard',
      aliases: ['top'],
      usage: '^leaderboard',
      description: 'Displays the money leaderboard.',
      category: 'Economy',
      accessableby: 'Users'      
    },
    
  run: async (client, message, args) => {
let usrCash = db.startsWith(`usrCash_${message.author.id}`, { sort: '.data'});
let content = '';
    
    for ( let i = 0; i < usrCash.length; i++) {
    let usr = client.users.get(usrCash[i].ID.split('_')[2]).username
    
    content += `${i+1}. ${usr} | ${usrCash[i].data}\n`
    
      }
    
    let embed = new RichEmbed()
      .setColor(orange)
      .setAuthor(`Guild | ${message.guild.id} Leaderboard`, message.guild.iconURL)
      .setDescription(content)
    mes
    }
  }
