const mc = require('minecraft-server-util');
const { RichEmbed } = require('discord.js');
const { orange, red } = require('../../colors.json');

  module.exports = {
    config: {
      name: 'minecraft',
      aliases: ['mc', 'mcs'],
      usage: '^minecraft (server IP) (server port)',
      description: 'Displays the minecraft server you input.',
      category: 'Miscellaneous',
      accessableby: 'Users'      
    },
    
  run: async (client, message, args) => {
let embed = new RichEmbed()

  if(!args[0]) {
    embed.setDescription(`${client.emojis.get('645467660229935135')} You need to provide a minecraft Server IP. (host)`)
    embed.setColor(red)
    return message.channel.send(embed)
  };
    
  if(!args[1]) {
    embed.setDescription(`${client.emojis.get('645467660229935135')} You need to provide a minecraft server port.`)
    embed.setColor(red)
    return message.channel.send(embed)
  };
    
    mc(args[0], parseInt(args[1]), (error, reponse) =>{
      let fEmbed = new RichEmbed()
        .setColor(orange)
        .setThumbnail
      
      
      })
    }
  }