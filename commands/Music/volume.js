const { RichEmbed } = require('discord.js');
const { orange, red } = require('../../colors.json');
  
  module.exports = {
    config: {
      name: "volume",
      aliases: ["vol", "v"],
      usage: ["^volume (0-200)"],
      description: "Changes the volume of the music",
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
  if(message.member.voiceChannel !== message.guild.me.voiceChannel) {
      let embed = new RichEmbed()
        .setColor(red)
        .setDescription(`${client.emojis.get('645467660229935135')} Connect to the same voicechannel as me to use this command.`)
      return message.channel.send(embed)
      }
    }
  }


/* const { RichEmbed } = require("discord.js");
const { blue, red } = require("../../colors.json");

  module.exports = {
    name: "volume",
    aliases: ["vol", "v"],
    usage: ["-volume (0-200)"],
    description: "Changes the volume of the music",
    category: "Music",
    
  run: async (client, message, args, ops) => {
  let fetched = ops.active.get(message.guild.id)
    if(!fetched) {
      let noQ = new RichEmbed()
        .setColor(red)
        .setDescription(`There's currently no queue running.`)
      return message.channel.send(noQ)
      }
    if(message.member.voiceChannel !== message.guild.me.voiceChannel) {
      let notSameVC = new RichEmbed()
        .setColor(red)
        .setDescription(`You need to be in the same voice channel as me`)
      return message.channel.send(notSameVC)
      }
    if(isNaN(args[0]) || args[0] > 200 || args[0] < 0) {
      let invaild = new RichEmbed()
        .setColor(red)
        .setDescription(`Input a number between 1-200 to change the volume to.`)
      return message.channel.send(invaild)
      }
    fetched.dispatcher.setVolume(args[0]/100)
    let success = new RichEmbed()
      .setColor(blue)
      .setDescription(`Set volume to: **${args[0]}**`)
    message.channel.send(success)
    }
  }*/