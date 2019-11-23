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
    
  if(!args[1] && !["lifetime", "solo", "duo", "squad"].includes(args[1])) {
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
      
      **❯ Gamemode:** ${gameType.slice(0, 1).toUpperCase() + gameType.slice(1)}
      **❯ Kills:** ${kills || 0}
      **❯ Score Per Minute:** ${scorePerMin || 0}
      **❯ Score:** ${score || 0}
      **❯ Wins:** ${wins || 0}
      **❯ Win Ratio:** ${winPercent || '0%'}
      **❯ KD (Kill-Death Ratio):** ${kd || 0}
      **❯ Matches Played:** ${matches || 0}

      **[profile](${url})**`)
      .setFooter(`${username}'s Fortnite Statisics.`, client.user.displayAvatarURL)
    return message.channel.send(finalEmbed)
    }
  }