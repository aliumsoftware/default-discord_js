var fs = require("fs");
var path = require('path');

  module.exports = {
    config: {
      name: 'default',
      aliases: [],
      usage: '!default',
      description: 'Displays a users avatar',
      category: 'Miscellaneous',
      accessableby: 'Users'

    },
    
  run: async (client, message, args) => {

    let jsonPath = path.join(__dirname, '..', '..','Users', message.author.id);
    if (!(fs.existsSync(jsonPath))){
    let jsonDefault = path.join(__dirname, '..', '..', 'user.json');
      let json = JSON.parse(fs.readFileSync(jsonDefault))
      json.name = message.author.username;
      fs.writeFile(jsonPath, JSON.stringify(json), (err) => {
        if (err) {
          message.channel.send(err);
          return;
        };
      });
      return message.channel.send("Account created for: " + message.author.username+" Default Command");
    }
    else return message.channnel.send("Default Command")
      }
    }
