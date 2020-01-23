const { RichEmbed } = require('discord.js');
const { orange, red, green } = require('../../colors.json');
const ms = require('parse-ms');
const client = require('discord.js')
var fs = require("fs");
var path = require('path');

  module.exports = {
    config: {
      name: 'daily',
      aliases: ['dailybonus', 'bonus'],
      usage: '!daily',
      description: 'Daily Bonus: Only redeemable in the lounge, once a day.',
      category: 'Economy',
      accessableby: 'Users'      
    },
    
  run: async (client, message, args) => {
let timeout = 1000 * 60 * 60 * 24;
const embed = new RichEmbed()
let jsonPath = path.join(__dirname, '..', '..','Users', message.author.id);
    if ((fs.existsSync(jsonPath))) {
    let json = JSON.parse(fs.readFileSync(jsonPath))
  let daily = json.daily;
        if(daily !== null && timeout - (Date.now() - daily) > 0) {
            let time = ms(timeout - (Date.now() - daily))
      
          embed.setColor(red)
          embed.setDescription(`You can get your daily bonus in: \`${time.hours}h ${time.minutes}m ${time.seconds}s\`.`)
          
          return message.channel.send(embed).then(m => {m.delete(10000)})
      } else {
        json.daily = Date.now(); 
     if (message.guild = client.guilds.get("644676276593885209")) {
       //667838808611487784
        embed.setColor(green)
        embed.setDescription(`You have redeemed your daily bonus and recieved **5000 𝓐**`)
        json.balance += 5000;
      }
  else message.channel.send(`Sorry, you can only get your daily bonus at https://invite.gg/aiden or https://discord.gg/RS4VceB`)
        fs.writeFile(jsonPath, JSON.stringify(json), (err) => {
    if (err) {
        message.channel.send(err);
        return;
    
    };
});
      }   
        return message.channel.send(embed)
      }
    else
      {
        const embed = new RichEmbed()
        embed.setColor(red)
        embed.setDescription(`File does not exist. Please run !bal to generate a new account`);
        return message.channel.send(embed)
      }
    }
  }