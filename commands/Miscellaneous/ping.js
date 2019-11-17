const { RichEmbed } = require("discord.js");
const { orange } = require("../../colors.json");

  module.exports = {
    config: {
      name: 'ping',
      aliases: ['latency', 'ms'],
      usage: '-ping',
      description: 'Displays the bot\'s latency',
      category: 'Miscellaneous',
      accessableby: 'Users'
    },
    
  run: async (client, message, args) => {
    
    }
  }

/* const { RichEmbed } = require("discord.js")
const { blue } = require("../../colors.json")

    module.exports = {
        name: "ping",
        aliases: ["ms", "latency"],
        usage: ["-ping"],
        description: "Outputs the Client and the API Latency",
        category: "Informational",

    run: async (client, message, args) => {
        message.channel.send(`Getting the Latency. This may take a moment.`).then(e => {
            let ping = e.createdTimestamp - message.createdTimestamp
            let embed = new RichEmbed()
                .setColor(blue)
                //.setAuthor(`${message.author.tag},`, message.author.displayAvatarURL)
                .setDescription(`
                **Wallet Latency:** \`${ping}\`ms
                **Discord.js Latency:** \`${Math.round(client.ping)}\`ms`)
                e.edit(embed)
            })
        }
    }*/