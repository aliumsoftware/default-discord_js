const { RichEmbed } = require('discord.js');
const { orange, red } = require('../../colors.json');

  module.exports = {
    config: {
      name: 'say',
      aliases: ['speak', 'talk'],
      usage: '^say (whatever you want the bot to say)',
      description: 'Says what you inputted in an agrument.',
      category: 'Miscellaneous',
      accessableby: 'Users'
    },
    
  run: async (client, message, args) => {
  let error = client.emojis.get(':x:');
  const embed = new RichEmbed()
  
  if(!message.member.hasPermission(['MANAGE_MESSAGES', 'ADMINISTRATOR']) || !message.guild.owner) {
    embed.setColor(red)
    embed.setDescription(`${error} You do not have the correct permissions to use this command!`)
    return message.channel.send(embed)
  }
    
  let text = args.slice(0).join(' ');
    
  if(!args[0]) {
    embed.setColor(red)
    embed.setDescription(`${error} What would you like me to say? Usage: \`^say (whatever you want the bot to say)\``)
    return message.channel.send(embed);
      };
    message.delete().catch()
    
    embed.setColor(orange)
    embed.setDescription(text)
    return message.channel.send(embed)
    }
  }