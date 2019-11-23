let prefix = "^";
const active = new Map()
const db = require('quick.db');

  module.exports = async (client, message) => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    let fetched = await db.fetch(`prefix_${message.guild.id}`)
      if(fetched === null) prefix = '^'
        else prefix = fetched
    
      if(message.channel.type === 'dm') return;
      if(message.isMemberMentioned(client.user)) return message.reply(`The guild prefix is: \`${fetched || '^'}\`. You can change it with the prefix command.`)
      if(!message.content.startsWith(prefix)) return;
      if(message.author.bot) return;
    let command = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));
    let ops = {
      active: active
    }
      if(command) 
        command.run(client, message, args, ops);
  }