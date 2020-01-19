const { RichEmbed } = require('discord.js')
const { orange, red } = require('../../colors.json');

  module.exports = {
    config: {
      name: 'purge',
      aliases: ['clear', 'delete', 'del'],
      usage: '^purge (messages)',
      description: 'Clears a certain amount of messages',
      category: 'Moderation',
      accessableby: 'Moderator+'
    },
    
  run: async (client, message, args) => {
const embed = new RichEmbed()
  if(!message.member.hasPermission(['ADMINISTRATOR', 'MANAGE_MESSAGES']) || !message.guild.owner) return;
  if(!message.guild.me.hasPermission(['ADMINISTRATOR', 'MANAGE_MESSAGES'])) {
    embed.setColor(red)
    embed.setDescription(`I don't have the correct permissions to execute this command.`)
      return message.channel.send(embed);
      };
  if(!args[0]) {
    embed.setColor(red)
    embed.setDescription(`Please supply an amount of messages to delete.`)
      return message.channel.send(embed);
  };
  const fetched = await message.channel.fetchMessages(args[0]);
    message.channel.bulkDelete(fetched)
    
    embed.setColor(orange)
    embed.setDescription(`Deleted ${args[0]} ${args[0] === 1 ? 'message' : 'messages'}`)
    return message.channel.send(embed).then(m => {m.delete(10000)})
    }
  }