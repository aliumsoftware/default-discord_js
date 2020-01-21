const { RichEmbed } = require('discord.js');
const { orange, red, green } = require('../../colors.json');
const db = require("quick.db");

  module.exports = {
    config: {
      name: 'announce',
      aliases: ['announcement'],
      usage: '!announce (whatever you want the bot to announce)',
      description: 'Says what you inputted in an agrument in a predefined announcement channel',
      category: "Moderation",
      accessableby: 'Administrators'
    },
    //Alright I have to go to my next class, cya.
  run: async (client, message, args) => {
  let error = client.emojis.get(':x:');
  const embed = new RichEmbed()
  //If you are not an Admin, you can't do it
  if(!message.member.hasPermission(['MANAGE_MESSAGES', 'ADMINISTRATOR']) || !message.guild.owner) {
    embed.setColor(red)
    embed.setDescription(`You do not have the correct permissions to use this command! Must be an administrator.`)
    return message.channel.send(embed)
  }
    //Set announcement channel
  if (args[0] == "set")
    {
      db.set(`dbAnnouncement_${client.guild}`, args[1]);
      embed.setColor(orange)
      embed.setDescription(`Set announcement channel name as ` + args[1]);
      return message.channel.send(embed)
    }
    //Set title of announcements
    else if (args[0] == "title")
      {
        db.set(`dbAnnounceTitle_${client.guild}`, args.slice(1).join(' '));
      embed.setColor(orange)
      embed.setDescription(`Set announcement title as ` + args.slice(1).join(' '));
      return message.channel.send(embed)
      }
    //Run announcement
    else {
  
  let text = args.slice(0).join(' ');
    
  if(!args[0]) {
    embed.setColor(green)
    embed.setDescription(`What would you like the announcement to say? (Usage: !announce (message))`)
    return message.channel.send(embed);
      };
    //message.delete().catch()
    let title = await db.fetch(`dbAnnounceTitle_${client.guild}`);
    embed.setTitle(title)
    embed.setColor(green)
    embed.setFooter(`https://invite.gg/aiden`)
    embed.setDescription(text)
     let id = await db.fetch(`dbAnnouncement_${client.guild}`);
    return client.channels.find(client =>client.name === id).send(embed);
    }
    }
  }