


/* const { blue } = require("../../colors.json")
const { RichEmbed } = require("discord.js")

  module.exports = {
    name: "uptime",
    aliases: ["timeup", "timeonline"],
    usage: ["-uptime"],
    description: "Outputs the bots uptime",
    category: "Informational", 
    
  run: async (client, message, args) => {
  function dur(ms) {
    const sec = Math.floor((ms / 1000) % 60).toString()
    const min = Math.floor((ms / (1000 * 60)) % 60).toString()
    const hrs = Math.floor((ms / (1000 * 60 * 60)) % 60).toString()
    const days = Math.floor((ms / (1000 * 60 * 60 * 24)) % 60).toString()
      return `${days.padStart(1, '0')} days, ${hrs.padStart(2, '0')} hours, ${min.padStart(2, '0')} minutes, ${sec.padStart(2, '0')} seconds.`
      }
  let uEmbed = new RichEmbed()
    .setColor(blue)
    .setDescription(`Uptime:
    ${dur(client.uptime)}`)
  message.channel.send(uEmbed)
    }
  }
*/