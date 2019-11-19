const { RichEmbed } = require("discord.js");
const { orange, red } = require("../../colors.json")

  module.exports = {
    config: {
      name: "skip",
      aliases: ["next", "nextsong"],
      usage: ["-skip"],
      description: "Skips the song",
      category: "Music",
      accessableby: 'Users'
    },
    
  run: async (client, message, args, ops) => {
let fetched = ops.active.get(message.guild.id);
  if(!fetched) {
    let embed = new RichEmbed()
      .setColor(red)
      .setDescription(`${client.emojis.get('645467660229935135')} There is currently no queue running for this guild.`)
    return message.channel.send(embed)
      }
    let queue = fetched.queue;
    if(message.member.voiceChannel !== message.guild.me.voiceChannel) {
      let embed = new RichEmbed()
        .setColor(red)
        .setDescription(`${client.emojis.get('645467660229935135')} Connect to the same voicechannel as me to use this command.`)
      return message.channel.send(embed)
      }
    
      try {
        let embed = new RichEmbed()
          .setColor(orange)
          .setDescription(`${client.emojis.get('645467627048665099')} Skipped song sucessfully.`)
        message.channel.send(embed)
        return fetched.dispatcher.emit('end')
      } catch(e) {
        let embed = new RichEmbed()
          .setColor(red)
          .setDescription(`${client.emojis.get('645467660229935135')} Something went wrong! Try again.`)
        return message.channel.send(embed)
      }
    }
  }


/* 
      if(message.member.voiceChannel !== message.guild.me.voiceChannel) {
        let noVC = new RichEmbed()
          .setColor(red)
          .setDescription(`You have to be in the same channel as me to use this command.`)
        return message.channel.send(noVC)
      }
    
      try {
      let sucess = new RichEmbed()
        .setColor(blue)
        .setDescription(`Skipped song Successfully`)
      message.channel.send(sucess)
        return fetched.dispatcher.emit('end')
      } catch(e) {
        let oops = new RichEmbed()
          .setColor(red)
          .setDescription(`Something went wrong with skipping. Use the leave command and replay your songs.`)
        message.channel.send(oops)
        console.log(e.message)
      }
    }
  }*/