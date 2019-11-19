const { RichEmbed } = require("discord.js");
const { orange } = require("../../colors.json");

  module.exports = {
    config: {
      name: 'botinfo',
      aliases: ['basicinfo'],
      usage: '^botinfo',
      description: 'Bot\'s information',
      category: 'Miscellaneous',
      accessableby: 'Users'
    },
    
  run: async (client, message, args) => {
    let embed = new RichEmbed()
      .setColor(orange)
    }
  }