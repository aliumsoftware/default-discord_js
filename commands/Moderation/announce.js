const { RichEmbed } = require('discord.js');
const { orange, red, green } = require('../../colors.json');
const db = require("quick.db");

  module.exports = {
    config: {
      name: 'announce',
      aliases: ['announcement'],
      usage: '!announce (whatever you want the bot to say)',
      description: 'Says what you inputted in an agrument in a predefined announcement channel',
      category: "Moderation",
      accessableby: 'Administrators'
    },
    
  run: async (client, message, args) => {
  let error = client.emojis.get(':x:');
  const embed = new RichEmbed()
  if (args[0] == "set")
    {
      db.set(`dbAnnouncement_${client.guild}`, args[1]);
      embed.setColor(orange)
      embed.setDescription(`Set announcement channel ID as` + args[1]);
      return message.channel.send(embed)
    }
    else{
  if(!message.member.hasPermission(['MANAGE_MESSAGES', 'ADMINISTRATOR']) || !message.guild.owner) {
    embed.setColor(red)
    embed.setDescription(`You do not have the correct permissions to use this command! Must be an administrator.`)
    return message.channel.send(embed)
  }
    //Do you want me to make the Alpha bot go online? sure Alright its' up
  let text = args.slice(0).join(' ');
    
  if(!args[0]) {
    embed.setColor(green)
    embed.setDescription(`What would you like the announcement to say? (Usage: !announce (message))`)
    return message.channel.send(embed);
      };
    //message.delete().catch()
    
    embed.setTitle(`Aiden's Lounge | Announcement`)
    embed.setColor(green)
    embed.setFooter(`https://invite.gg/aiden`)
    embed.setDescription(text)
     let id = await db.fetch(`dbAnnouncement_${client.guild}`);
    return client.channels.get(id).send(embed);
    }
    }
  }