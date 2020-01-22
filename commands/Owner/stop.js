const { RichEmbed } = require("discord.js");
const { orange, red, green } = require("../../colors.json");

  module.exports = {
    config: {
      name: 'stop',
      aliases: ['reboot', 'rebootprocess', 'botstop'],
      usage: '!stop',
      description: 'Stops the bot.',
      category: 'Owner',
      accessableby: 'Bot Owner'
    },
  run: async (client, message, args) => {
      if(message.author.id === '272809862591938570') {
        try {
          let embed = new RichEmbed()
            embed.setColor(red)
            embed.addField('[**__Stopping__**]', `Bot will now stop. Please `, true)

          let m = await message.channel.send(embed).then(m => {
            process.exit();
          })
        } catch(e) {
          let embed = new RichEmbed()
            .setColor(red)
            .setDescription('Something went wrong!')
          return message.channel.send(embed)
        }
      } else {
      if(!message.guild.me.hasPermission(["ADMINISTRATOR", "ADD_REACTIONS"])) return;
        return message.react(client.emojis.get("645467660229935135"))
      }
    }
  }