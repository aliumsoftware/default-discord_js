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
      .setDescription(`${error} - You don't have the vaild permissions to use this command!`)
          if(!message.member.hasPermission(['ADMINISTRATOR', 'MANAGE_GUILD']) || !msg.guild.owner) return msg.channel.send(embed);

    }
  }

/* if(command === 'prefix') {
        let embed = new RichEmbed()
          .setColor("RED")
          .setDescription('❌ - You\'re not allowed to execute this command.')
        if(!msg.member.hasPermission(['ADMINISTRATOR', 'MANAGE_GUILD']) || !msg.guild.owner) return msg.channel.send(embed);
        if(!args[0]) return msg.channel.send('❌ - Supply an argument.')
        
        db.set(`prefix_${msg.guild.id}`, args.join(' ')).then(i => {
          let e = new RichEmbed()
            .setColor("BLUE")
            .setDescription(`✅ - Prefix was set sucessfully to: \`${i}\``)
          msg.channel.send(e)
        })
      }*/