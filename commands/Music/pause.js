const { RichEmbed } = require("discord.js");
const { blue, red } = require("../../colors.json")

  module.exports = {
    config: {
    name: "pause",
    aliases: ["stop", "stap"],
    usage: ["^pause"],
    description: "Pauses the music",
    category: "Music",
    accessableby: 'Users'
    },
    
  run: async (client, message, args, ops) => {
  let fetched = ops.active.get(message.guild.id)
    if(!fetched) {
      let notPaused = new RichEmbed()
        .setColor(red)
        .setDescription(`There is currently no queue running.`)
 return message.chanel.send(notPaused)
      }
    if(message.member.voiceChannel !== message.guild.me.voiceChannel) {
      let no = new RichEmbed()
        .setColor(red)
        .setDescription(`Connect to the same voice channel as me.`)
      return message.channel.send(no)
    }
    if(fetched.dispatcher.paused) {
      let already = new RichEmbed()
        .setColor(blue)
        .setDescription(`The music is already paused.`)
      return message.channel.send(already)
    }
    fetched.dispatcher.pause()
    let pausedS = new RichEmbed()
      .setColor(blue)
      .setDescription(`Music has been paused.`)
    return message.channel.send(pausedS)
    }
  }