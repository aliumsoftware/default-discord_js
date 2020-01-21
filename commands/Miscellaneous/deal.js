
const { RichEmbed } = require("discord.js");
const { promptMessage } = require("../../functions.js");
const { orange, red } = require('../../colors.json');
const db = require('quick.db');
const ms = require('parse-ms');

const chooseArr = ["✅", "⛔"];
var number = Math.floor(Math.random() * 5000);
let timeout = 3600000;
  module.exports = {
    config: {
      name: "deal",
      aliases: ["dealornodeal", "nodeal"],
      category: "Fun",
      description: "Deal or no deal game. React to one of the emojis to play the game.",
      usage: "!deal",
      category: 'Miscellaneous',
      accessableby: 'Users',
    },
    
      run: async (client, message, args) => {
        const embed = new RichEmbed()
        let deal = await db.fetch(`deal_${message.author.id}`);
        if(deal !== null && timeout - (Date.now() - deal) > 0) {
            let time = ms(timeout - (Date.now() - deal))
      
          embed.setColor(red)
          embed.setDescription(`You can beg again in: \`${time.hours}h ${time.minutes}m ${time.seconds}s\`.`)
          
          return message.channel.send(embed).then(m => {m.delete(10000)})
      } 
        else{
		  var keepRunning = true;

            embed
              .setColor(orange)
             // .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
              .setDescription("That was the banker. Here is your offer. "+ number + "𝓐 Deal or no deal?")
             // .setTimestamp();
          const m = await message.channel.send(embed);
  while(keepRunning == true) {
        embed
        .setColor(orange)
             // .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
              .setDescription("That was the banker. Here is your offer. "+ number + "𝓐 Deal or no deal?")
             // .setTimestamp();
		  m.edit(embed)
          const reacted = await promptMessage(m, message.author, 30, chooseArr);
		  if (reacted === "⛔")
		  {
			  if (Math.floor(Math.random() * 5) == 1) {
				  number = 0;
          embed
              .setDescription('')
              .setTitle("The Banker Pulls Out.")
              .addField('[**__You Missed Out :/ Total:__**]', number, true)
          m.edit(embed);
				  keepRunning = false;
				  await m.clearReactions();
			  }
			  else {
				  number += (Math.floor(Math.random() * 4000) + 1000);
				  keepRunning = true;
				  await m.clearReactions();
			  }
			  
		  }
		  else {
			  db.add(`usrCash_${message.author.id}`, number);
			  embed
              .setDescription('')
              .setTitle("Deal!")
              .addField('[**__You Won__**]', number, true);
			  
			  m.edit(embed);
			  keepRunning = false;
			  await m.clearReactions();
		  }
          
          
          
		  }
        db.set(`deal_${message.author.id}`, Date.now());
        }
	  }
          

  }
      