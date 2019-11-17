const { RichEmbed } = require("discord.js")
const { orange } = require("../../colors.json")

  module.exports = {
    config: {
      name: 'userinfo',
      aliases: ['ui', 'profile'],
      usage: '^userinfo [@mention | id]',
      description: 'Displays the user\'s information.',
      category: 'Miscellaneous',
      accessableby: 'Users'
    },
    
  run: async (client, message, args) => {
let user = message.mentions.members.first() || message.guild.members.get(args[0])

    }
  }