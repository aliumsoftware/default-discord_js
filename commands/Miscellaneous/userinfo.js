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
let user = message.mentions.members.first() || message.guild.members.get(args[0]);
    // emojis
let online = client.emojis.get('645689625591021578');
let idle = client.emojis.get('645689592502288407');
let dnd = client.emojis.get('645689543143718922');
let offline = client.emojis.get('645689513590390785');
    // if
    
  if(user.presence.status === 'online') user.presence.status = online
    
    }
  }