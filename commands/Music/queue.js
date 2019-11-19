const { RichEmbed } = require("discord.js");
const { orange, red } = require("../../colors.json");

  module.exports = {
    config: {
      name: "queue",
      aliases: ["q", "upcoming"],
      usage: ["^queue"],
      description: "Displays the queue for the guild",
      category: "Music",
      accessableby: 'Users'
    },
    
  run: async (client, message, args, ops) => {
    
    }   
  }

/*   let fetched = ops.active.get(message.guild.id);
    if(!fetched) return message.channel.send('No queue running in the guild');
  
  let queue = fetched.queue;
  let nowPlaying = queue[0];
  //let resp = `__**Now Playing**__\n *${nowPlaying.songTitle}* | ${nowPlaying.requester}\n\n**Queue**\n`
  let resp = ``;
  
    for ( var i = 1; i < queue.length; i++) {
      resp += `${i}. **${queue[i].songTitle}** | ${queue[i].requester}\n`;
    }
    let embed = new RichEmbed()
      .setColor(blue)
      .setTitle(`**${message.guild.name}'s Queue**`)
      .setDescription(`**__Now Playing:__** ${nowPlaying.songTitle} | ${nowPlaying.requester}

      **Queue:**
      ${resp}`)
    message.channel.send(embed)*/