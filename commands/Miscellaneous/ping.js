const { RichEmbed } = require("discord.js");
const { orange } = require("../../colors.json");

  module.exports = {
    config: {
      name: 'ping',
      aliases: ['latency', 'ms'],
      usage: '-ping',
      description: 'Displays the bot\'s latency',
      category: 'Miscellaneous',
      accessableby: 'Users'
    },
    
  run: async (client, message, args) => {
    message.channel.send('Getting latency(s)...').then(m => {
      let ping = m.createdTimestamp - message.createdTimestamp
      let embed = new RichEmbed()
        .setColor(orange)
        .setTitle(`🏓 | Ping-pong!`)
        .setDescription(`**Executor Latency**: ${ping}ms 
        **API Latency**: ${Math.round(client.ping)}ms`)
      m.delete()
      message.channel.send(embed)
      })
    }
  }