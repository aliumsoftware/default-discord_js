const { RichEmbed } = require("discord.js");
const { orange } = require("../../colors.json");
const cpuStat = require("cpu-stat");
const envinfo = require("envinfo");
const os = require('os');

  module.exports = {
    config: {
      name: 'botinfo',
      aliases: ['basicinfo'],
      usage: '^botinfo',
      description: 'Bot\'s information',
      category: 'Miscellaneous',
      accessableby: 'Users'
    },
    
  run: async (client, message, args) => {
    cpuStat.usagePercent(async function(err, percent, seconds) {
      var p = percent
    var t = p.toString().slice(0, 3)
    const inf = await envinfo.run({
        System: ['OS', 'CPU', 'Memory', 'Shell']
      }, { json: true})
      let { System } = JSON.parse(inf)
    let embed = new RichEmbed()
      .setColor(orange)
      .setTitle(`${client.emojis.get('646198812435546142')} **Client Information**`)
      .addField('[**__Theme:__**]', '`Orange v2.1 (#eb5931)`', true)
      .addField('[**__Client ID:__**]', `\`${client.user.id}\``, true).addField('[**__Version:__**]', '`v2`', true)
      .addField('[**__Memory Usage:__**]', `\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} mb/s\``, true)
      .addField('[**__CPU Usage:__**]', `\`${t}\``, true).addField('[**__OS:__**]', `\`${System.OS}\``, true)
    message.channel.send(embed)
    })
    }
  }