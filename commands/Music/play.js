const yt = require("ytdl-core")
const { RichEmbed } = require("discord.js")
const { orange, red } = require("../../colors.json")

  module.exports = {
    config: {
    name: "play",
    aliases: ["p", "youtube", "yt"],
    usage: ["^play (url | song name)"],
    description: "Plays the music in a voice channel.",
    category: "Music",
    accessableby: 'Users'
      },
  
  run: async (client, message, args, ops) => {
    let connectionInvaild = new RichEmbed()
      .setColor(red)
      .setDescription(`Send a vaild YouTube Link to play.`)
    let voiceChannelInvaidl = new RichEmbed()
      .setColor(red)
      .setDescription(`Join a voice channel before using this command.`)
  if(!message.member.voiceChannel) return message.channel.send(voiceChannelInvaidl)
    if(!args[0]) return message.channel.send(connectionInvaild)
  let validate = await yt.validateURL(args[0])
    if(!validate) {
            return;
    
    }
    let info = await yt.getInfo(args[0])
  let data = ops.active.get(message.guild.id) || {};
    if(!data.connection) data.connection = await message.member.voiceChannel.join()
    if(!data.queue) data.queue = [];
      data.guildID = message.guild.id;
      data.queue.push({
        songTitle: info.title,
        requester: message.author.tag,
        url: args[0],
        annouceChannel: message.channel.id,
        thumbnail: info.thumbnail_url
      });
    if(!data.dispatcher) play(client, ops, data);
    else {
      let embed = new RichEmbed()
        .setColor(orange)
        .addField('[**__Song added to queue:__**]', `\`${info.title}\``)
        //.setDescription(`Song added to queue: **${info.title}**`)
        .setThumbnail(data.queue[0].thumbnail)
        .setFooter(`Requester: ${message.author.tag}`)
    //message.channel.send(`Song added: ${info.title} | Requester: ${message.author.tag}`)
      message.channel.send(embed)
      }
    ops.active.set(message.guild.id, data)
    }
  }

async function play(client, ops, data) {
  let nowPlaying = new RichEmbed()
    .setTitle(`${client.emojis.get('645467627048665099')} **Sucess!**`)
    .setColor(orange)
    .setThumbnail(data.queue[0].thumbnail)
    .addField('[**__Now Playing:__**]', `\`${data.queue[0].songTitle}\``, true)
    .addField('[**__Song Requester:__**]', `\`${data.queue[0].requester}\``, true)
    //.setDescription(`${data.queue[0].songTitle}`)
    //.setFooter(`Requester: ${data.queue[0].requester}`)
  client.channels.get(data.queue[0].annouceChannel).send(nowPlaying)
  //client.channels.get(data.queue[0].annouceChannel).send(`Now playing: ${data.queue[0].songTitle} | Requester: ${data.queue[0].requester}`)
  data.dispatcher = await data.connection.playStream(yt(data.queue[0].url, { filer: 'audioonly'}));
  data.dispatcher.guildID = data.guildID;
  
  data.dispatcher.on('end', async function() {
    end(client, ops, this, data);
  })
  
  }

async function end(client, ops, dispatcher, data) {
  
  let fetched = ops.active.get(dispatcher.guildID);
  fetched.queue.shift()
  if(fetched.queue.length > 0) {
    ops.active.set(dispatcher.guildID, fetched);
    play(client, ops, fetched)
  } else {
    ops.active.delete(dispatcher.guildID)
  }
}