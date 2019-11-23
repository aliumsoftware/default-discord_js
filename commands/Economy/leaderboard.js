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
let usrC = await db.fetch(`usrCash_${message.author.id}`, { sort: '.data'});
    if(usrC === null) usrC = 0;
let content = "";
    
    for ( let i = 0; i < usrC.length; i++) {
    let usr = client.users.get(usrC[i].ID[2])
    
    content += `${parseInt(i)+1} **${usr}** | ${usrC[i].data}\n`
    
      }
    
    let embed = new RichEmbed()
      .setColor(orange)
      .setAuthor(`Guild | ${message.guild.name} Leaderboard`, message.guild.iconURL)
      .setDescription(content)
    message.channel.send(embed)
    }
  }


/* 
    if (args[0] == 'coins') {
    let money = db.startsWith(`money_${message.guild.id}`, { sort: '.data'})
    let content = "";

    for (let i = 0; i < money.length; i++) {
        let user = bot.users.get(money[i].ID.split('_')[2]).username

      

        content += `${i+1}. ${user} ~ ${money[i].data}\n`
    
      }*/