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
let money = await db.startsWith(`usrCash_${message.author.id}`, { sort: 'data'})
let c = "";
    
    for ( let i = 0; i < money.length; i++) {
let usr = client.users.get(money[i].).username[2]
      c += `${i+1}) ${usr} ~ ${money[i].data}\n`
    
      }
    message.channel.send(c)
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