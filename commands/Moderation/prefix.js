const { RichEmbed } = require('discord.js');
const { orange, red } = require('../../colors.json');
const db = require('quick.db');

  module.exports = {
    config: {
      name: 'prefix',
      aliases: ['setPrefix', 'prefixset'],
      usage: '^prefix (prefix)',
      description: 'Sets the guild\'s prefix.',
      category: 'Moderation',
      accessableby: 'Administrator+'
    },
    
  run: async (client, message, args) => {
  let error = client.emojis.get('645467660229935135');
  let check = client.emojis.get('645467627048665099');
    
    let embed = new RichEmbed()
      .setColor(red)
      .setDescription(`${error} You don't have the vaild permissions to use this command!`)
  if(!message.member.hasPermission(['ADMINISTRATOR', 'MANAGE_GUILD']) || !message.guild.owner) return message.channel.send(embed);
  if(!args[0]) {
    const e = new RichEmbed()
      .setColor(red)
      .setDescription(`${error} You need to supply and argument for me to change the prefix too.`)
    return message.channel.send(e);
  };
    
    db.set(`prefix_${message.guild.id}`, args.join(' ')).then(s => {
      let ok = new RichEmbed()
        .setColor(orange)
        .setDescription(`${check} Prefix was successfully set to: \`${s}\`.\nMention me when you need to know the prefix if you forget it..`)
      return message.channel.send(ok)
      })
    }
  }