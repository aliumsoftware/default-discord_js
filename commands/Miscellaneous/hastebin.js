const hb = require("hastebin-gen");
const { RichEmbed } = require("discord.js");
const { orange, red } = require("../../colors.json");

  module.exports = {
    config: {
      name: "hastebin",
      aliases: ["hb", "codebin"],
      usage: '^hastebin (code)',
      description: "Copy and paste code and get code from others",
      category: "Miscellaneous",
    }
  }

/* const fetch = require('node-fetch');
const hastebin = require("hastebin-gen");
const { RichEmbed } = require("discord.js");
const { cyan } = require("../../colors.json")

module.exports = {
  name: "hastebin",
  aliases: ["hb", "codebin"],
  description: "Copy and paste code and get code from others",
  category: "Info",
  usage: ["f.hastebin (code/text)"],
  
  run: async (bot, message, args) => {
  let text = args.slice(0).join(" ")
  let type = args.slice(1).join(" ")
    if(!args[0]) return message.channel.send(`What would you like to make a hastebin out of? Usage: f.hastebin (code/text)`)
  if(!message.guild.me.hasPermission(["ADMINISTRATOR", "MANAGE_MESSAGES"])) return message.channel.send(`I need vaild permissions to delete the command after you executed it.`)
      try {
        message.delete().catch()
    hastebin(text).then(r => {
      let hEmbed = new RichEmbed()
        .setColor(cyan)
        .setDescription(`Here is ${message.author.tag}'s code:

        **[Hastebin Code Link](${r})**`)
      message.channel.send(hEmbed)      
        })
      } catch(e) {
        console.log(e.message)
        return message.channel.send(`Error Occured. Try again.`)
      }
  }
}*/