const { RichEmbed } = require('discord.js');
const { orange, red } = require('../../colors.json');

  module.exports = {
    config: {
      name: 'kick',
      aliases: ['k', 'kickuser'],
      usage: '^kick (@user | id) [reason]',
      description: 'Kicks a user from the guild.',
      category: 'Moderation',
      accessableby: 'Moderatior+'      
    },
    
  run: async (client, message, args) => {
const embed = new RichEmbed()
  if(!message.guild.me.hasPermission(['ADMINISTRATOR', 'KICK_MEMBERS'])) {
   embed.setColor(red)
   embed.setDescription(`${client.emojis.get('645467660229935135')} I don't have the correct permissions to kick that user!`)
    return message.channel.send(embed);
      };
    
  if(!message.member.hasPermission(['ADMINISTRATOR', 'KICK_MEMBERS']) || !message.guild.owner) return;
let toKick = message.mentions.members.first() || message.guild.members.get(args[0]);
let reason = args.slice(1).join(' ');
  if(!toKick || !args[1]) {
    
  }
 
    }
  }