const { RichEmbed } = require('discord.js');
const { orange, red } = require('../../colors.json');
const ftn = require('simple-fortnite-api'), bot = new ftn(process.env.APIFKEY);

  module.exports = {
    config: {
      name: 'fortnite',
      aliases: ['ftn', 'fnight', 'fortfuck'],
      usage: '^fortnite (user) (lifetime | solo | duo | squad)',
      description: 'Checks a user\'s fortnite stats.',
      category: 'Miscellaneous',
      accessableby: 'Users'
    },
    
  run: async (client, message, args) => {
const embed = new RichEmbed()
  if(!args[0]) {
    embed.setColor(red)
    embed.setDescription('Who would you like me to look up?')
    return message.channel.send(embed);
      };
    
  if(!args[0] && !['lifetime', 'solo', 'duo', 'squad'].includes(args[1])) {
    embed.setColor(red)
    embed.setDescription('What gamemode would you like me to search that user for?')
    return message.channel.send(embed);
      };
    
  let gameType = args[1] ? args[1].toLowerCase() : 'lifetime';
  let data = await bot.find(args[0]);
    if(data && data.code === 404) {
      embed.setColor(red)
      embed.setDescription(`${client.emojis.get('645467660229935135')} No user with the username of: \`${args.join(' ')}\``)
      return message.channel.send(embed);
      };
    const { image, url, username } = data;
    const { scorePerMin, winPercent, kills, score, wins, kd, matches } = data[gameType];
    
    const finalEmbed = new RichEmbed()
      .setColor(orange)
      .setAuthor(`${username}'s Fortnite User Information.`, image)
      .setThumbnail(image)
      .setDescription(`**__User Statisics__**
      
`)
    }
  }


/*const { RichEmbed } = require("discord.js")
const { blue } = require("../../colors.json")
const { stripIndents } = require("common-tags")
const fornite = require("simple-fortnite-api"), client = new fornite(process.env.APIFKEY)

module.exports = {
    config: {
        name: "fortnite",
        aliases: ["ftn"],
        usage: "<prefix>fortnite <user> <platform>",
        category: "Gaming",
        description: "Check a user's fornite stats!",
        accessableby: "Everyone"
    },

    run: async (message, args) => {
    if(!args[0]) return message.channel.send("*What user do you want me to look up?*")
    if(!args[1] && !["lifetime", "solo", "duo", "squad"].includes(args[1])) return message.channel.send("*What game type type do you want me to look up with the username?*")
let gameT = args[1] ? args[1].toLowerCase() : "lifetime";
let data = await client.find(args[0])
    if(data && data.code === 404) return message.channel.send("❌ Couldn't find that user with that username.")
        const { image, url, username } = data;
        const { scorePerMin, winPercent, kills, score, wins, kd, matches} = data[gameT]

    const embed = new RichEmbed()
        .setColor(blue)
        .setAuthor(`Epic Games (Fortnite) | ${username}`, image)
        .setThumbnail(image)
        .setDescription(stripIndents `User ${username}'s Forntite Statistics:
        **Gamemode:** ${gameT.slice(0, 1).toUpperCase() + gameT.slice(1)}
        **Kills:** ${kills || 0}
        **Score Per Minute:** ${scorePerMin || 0}
        **Score:** ${score || 0}
        **Wins:** ${wins || 0}
        **Win Ratio:** ${winPercent || '0%'}
        **KD:** ${kd || 0}
        **Matched Played:** ${matches || 0}
        **Link to profile:** [${username}'s Link to Profile:](${url})`)
    
        .setTimestamp()
        .setFooter(`${username}'s User Statistics`)

        message.channel.send(embed)

    }    
} */