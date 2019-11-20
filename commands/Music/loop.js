const { RichEmbed } = require("discord.js");
const { orange, red } = require("../../colors.json")

  module.exports = {
    config: {
    name: "loop",
    aliases: ["l", "repeat"],
    usage: ["^loop"],
    description: "Loops the music",
    category: "Music",
    accessableby: 'Users'
    },
    
  run: async (client, message, args, ops) => {
  let fetched = ops.active.get(message.guild.id)
    if(!fetched) {
      let embed = new RichEmbed()
      .setColor(red)
      .setDescription(`${client.emojis.get('645467660229935135')} There is currently no queue running for this guild.`)
    return message.channel.send(embed)
      }
    if(message.member.voiceChannel !== message.guild.me.voiceChannel) {
      let embed = new RichEmbed()
        .setColor(red)
        .setDescription(`${client.emojis.get('645467660229935135')} Connect to the same voicechannel as me to use this command.`)
      return message.channel.send(embed)
    }
    if(fetched.dispatcher.looped) {
      let already = new RichEmbed()
        .setColor(orange)
        .setDescription(`${client.emojis.get('645467660229935135')} The music is already looped.`)
      return message.channel.send(already)
    }
    fetched.dispatcher.loop(fetched.queue[0].songTitle)
    let pausedS = new RichEmbed()
      .setColor(orange)
      .setDescription(`${client.emojis.get('645467627048665099')} Music has been looped.`)
    return message.channel.send(pausedS)
    }
  }