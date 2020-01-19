const { RichEmbed } = require("discord.js");
const { orange } = require("../../colors.json");
const f = require('node-fetch');

  module.exports = {
    config: {
    name: 'chicken',
    aliases: ['chick', 'rooster', 'cockadoodledo'],
    usage: ['!cat'],
    description: 'Sends a cat picture',
    category: 'Miscellaneous',
    accessableby: 'Users'
    },
    
  run: async (client, message, args) => {
    f('hhttp://fotozon.com/r/')
      .then(res => res.json()).then(body => {
          if(!body) return message.channel.send('Image couldn\'t be received. Try again.')
        let cEmbed = new RichEmbed()
          .setColor(orange)
          .setImage(body.file)
        message.channel.send(cEmbed)
      })
    }
  }