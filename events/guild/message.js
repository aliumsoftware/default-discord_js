const prefix = "^";
const active = new Map()

  module.exports = async (client, message) => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
      if(message.channel.type === 'dm') return;
    const cmd = args.shift().toLowerCase();
      if(!message.content.startsWith(prefix)) return;
      if(message.author.bot) return;
    let command = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));
    let ops = {
      active: active
    }
      if(command) 
        command.run(client, message, args, ops);
  }