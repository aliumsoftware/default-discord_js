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
    let status = user.presence.status
  if(status === 'online') status = online;
  if(status === 'idle') status = idle;
  if(status === 'dnd') status = dnd;
  if(status === 'offline') status = offline;
    let game = user.presence.game
  if(game === 'null') game = 'No game';
    
    let uEmbed = new RichEmbed()
      .setColor(orange)
      .setTitle(`**${status} | ${user.tag} Information**`)
      .addField('[**__Bot:__**]', `\`${user.bot ? 'Yes' : 'No'}\``, true)
      .addField('[**__ID:__**]', `\`${user.id}\``, true).addField('[**__Game:__**]', `\`${game}\``, true)
      .addField('[**__Roles__**]', `${user.roles.filter(f => f.name !== '@everyone').map(x => x).join(", ")}` )

    
    } // ${member.roles.filter(f => f.name !== "@everyone").map(x => x).join(", ")}*
  } // ${member.user.bot ? `Yes` : `No`}