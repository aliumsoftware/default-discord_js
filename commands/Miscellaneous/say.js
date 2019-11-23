const { RichEmbed } = require('discord.js');
const { orange, red } = require('../../colors.json');

  module.exports = {
    config: {
      name: 'say',
      aliases: ['speak', 'talk'],
      usage: '^say (whatever you want the bot to say)',
      description: 'Says what you inputted in an agrument.',
      category: 'Miscellaneous',
      accessableby: 'Users'
    },
    
  run: async (client, message, args) => {
    
    }
  }