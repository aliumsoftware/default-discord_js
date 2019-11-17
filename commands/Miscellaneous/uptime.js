const { orange } = require("../../colors.json");
const { RichEmbed } = require("discord.js");

  module.exports = {
    config: {
      name: 'uptime',
      aliases: ['timeup'],
      usage: '^uptime',
      description: 'Displays the bot\'s uptime',
      category: 'Miscellaneous',
      accessableby: 'Users'
    },
    
  run: async (client, message, args) => {
    function dur(ms) {
    const sec = Math.floor((ms / 1000) % 60).toString()
    const min = Math.floor((ms / (1000 * 60)) % 60).toString()
    const hrs = Math.floor((ms / (1000 * 60 * 60)) % 60).toString()
    const days = Math.floor((ms / (1000 * 60 * 60 * 24)) % 60).toString()
      return `${days.padStart(1, '0')} days, ${hrs.padStart(2, '0')} hours, ${min.padStart(2, '0')} minutes, ${sec.padStart(2, '0')} seconds.`
      }
    let embed = new RichEmbed()
      .setTitle(`**${client.emojis.get("645463669991407646")} | Uptime:**`)
      .setColor(orange)
      .setDescription(`${dur(client.uptime)}`)
    message.channel.send(embed)
    }
  }