var fs = require("fs");
var path = require('path');

  module.exports = {
    config: {
      name: 'claim',
      aliases: [],
      usage: '!claim',
      description: 'Displays a users avatar',
      category: 'Miscellaneous',
      accessableby: 'Users'

    },
    
  run: async (client, message, args) => {
      let jsonPath = path.join(__dirname, '..', '..', 'bot.json');
    let json = JSON.parse(fs.readFileSync(jsonPath))
    if (json.claimed == false) {
    json.claimed = true;
    fs.writeFile(jsonPath, JSON.stringify(json), (err) => {
        if (err) {
          message.channel.send(err);
          return;
        };
      });
    let userPath = path.join(__dirname, '..', '..','Users', message.author.id);
    if ((fs.existsSync(userPath))){
      let userjson = JSON.parse(fs.readFileSync(userPath))
      userjson.rank = "Owner";
      fs.writeFile(jsonPath, JSON.stringify(userjson), (err) => {
        if (err) {
          message.channel.send(err);
          return;
        };
      });
      return message.channel.send("Bot claimed by: <@" + message.author.id + ">");
    }
    
    }
    else return message.channnel.send("Bot already claimed.");
      }
    }
