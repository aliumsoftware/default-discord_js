const { RichEmbed } = require("discord.js");
const { red, orange } = require("../../colors.json");
const { readdirSync } = require('fs');

  module.exports = {
    
  }


/* 
        let embed = new RichEmbed()
        .setColor(gold)
        .setAuthor(`${message.guild.me.displayName} Help`, bot.user.displayAvatarURL)
        .setThumbnail(bot.user.displayAvatarURL)

    if(!args[0]) {

        const categories = readdirSync("./commands/")

        embed.setDescription(`To see commands, Do ${prefix1}help_commands`)
        embed.setFooter(`Total Commands: ${bot.commands.size} | © ${message.guild.me.displayName}`, bot.user.displayAvatarURL)
        embed.addField(`Guild Prefix:`, `**${prefix1}**`);

        categories.forEach(category => {
            const dir = bot.commands.filter(c => c.config.category === category)
            const capitalise = category.slice(0, 1).toUpperCase() + category.slice(1)
            try {
                embed.addField(`❯ ${capitalise} [${dir.size}]:`, dir.map(c => `\`${c.config.name}\``).join(" "))
            } catch(e) {
                
            } 
        }) 

        return message.channel.send(embed)
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