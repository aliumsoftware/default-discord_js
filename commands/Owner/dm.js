const { RichEmbed } = require("discord.js")

module.exports = {
  config: {
  name: "dm",
  aliases: [],
  description: "Hidden",
  category: "Developers",
  usage: ["Hidden"]
  },
  
  run: async (bot, message, args) => {
  if(message.author.id === '272809862591938570' || message.author.id === '162369340069511180') {
   try {
  let user = await bot.fetchUser(args[0])
  if(!user) return message.channel.send(`You need to supply a user Aiden/Cory.`)
  let msg = args.slice(1).join(" ")
  if(!msg) return message.channel.send(`I need something to send.`)
    
    user.send(`${msg}`)
    message.channel.send(`Sent message to \`${user.tag}\` with id of \`${args[0]}\``)  
   } catch(e) {
     message.channel.send(`${e.message}`)
   }
    } else {
    message.react(`❌`)
    }
  }
}