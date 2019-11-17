const { RichEmbed } = require("discord.js");
const { red, orange } = require("../../colors.json");
const { readdirSync } = require('fs');

  module.exports = {
    config: {
      name: 'help',
      aliases: ['commandhelp', 'commands'],
      usage: '^help [command name or alias]',
      description: 'Displays the commands or gives the command information',
      category: 'Miscellaneous',
      accessableby: 'Users'
    },
    
  run: async (client, message, args) => {
    let embed = new RichEmbed()
      .setColor(orange)
      .setAuthor(`${client.user.tag} Help`, client.user.displayAvatarURL)
      .setThumbnail(client.user.displayAvatarURl)
    
      if(!args[0]) {
        const categories = readdirSync("./commands/")
        
        embed.setDescription(`Here are the commands for ${client.user.tag}`)
        embed.setFooter(`Command Size: ${client.commands.size} | A Fueled Development © Project`);
        
        categories.forEach(category => {
          const dir = client.cmmands.filter(c => c.config.category === category)
          const capitalise = category.slice(0, 1).toUpperCase() + category.slice(1)
            try {
              embed.addField(`❯ ${capitalise} [${dir.size}]:`, dir.map(c => `\`${c.config.name}\``).join(" "))
            } catch(e) {
              
            }
        })
        return message.channel.send(embed)
      } else {
        let command = client.commands.get(client.aliases.get(args[0].toLowerCase()) || args[0].toLowerCase())
        if(!command) {
          embed.setTitle('Invaild Command!')
          embed.setDescription(`${args.slice(0).join(" ")}`)
        }
      }
    }
  }


/* 

    } else {
        let command = bot.commands.get(bot.aliases.get(args[0].toLowerCase()) || args[0].toLowerCase())
        if(!command) return message.channel.send(embed.setTitle("Invalid Command!").setDescription(`Do \`${prefix1}help_commands\` for the list of the commands.`).setThumbnail("https://cdn.discordapp.com/attachments/612020606480678968/625104289353826329/648903-star-ratings-512.png").setColor(red_light))
        command = command.config

        embed.setDescription(stripIndents` Command Help: **${command.name.slice(0, 1).toUpperCase() + command.name.slice(1)}**
        
        **Command:** ${command.name.slice(0, 1).toUpperCase() + command.name.slice(1)}
        **Command Aliases:** ${command.aliases ? command.aliases.join(", ") : "None Specified."}
        **Command Usage:** ${command.usage ? `\`${command.usage}\`` : "No Usage Specified"}
        **Command Description:** ${command.description || "No Description Specified."}
        **Command Category:** ${command.category || "No Category Specified."}
        **Command Accessible By:** ${command.accessableby || "No group specified."}`).setColor(green_dark)

        return message.channel.send(embed)
    } 
 */