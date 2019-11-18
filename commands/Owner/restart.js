const { RichEmbed } = require("discord.js");
const { orange, red } = require("../../colors.json");

  module.exports = {
    config: {
      name: 'restart',
      aliases: ['reboot', 'rebootprocess'],
      usage: '^restart',
      description: 'Restarts the bot.',
      category: 'Owner',
      accessableby: 'Bot Owner'
    },

  run: async (client, message, args) => {
      if(message.author.id === '535585397435006987') {
        try {
          let embed = new RichEmbed()
            embed.setColor(orange)
            embed.addField('[**__Restarting__**]', `Bot will restart.`, true)

          let m = await message.channel.send(embed).then(m => {
            process.exit();
            client.login(process.env.DTOKEN).then(() => {
            embed.setDescription('Bot has restarted.');
            m.delete()
              
            })
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