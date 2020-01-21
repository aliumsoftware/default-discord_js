
const { RichEmbed } = require("discord.js");
const { promptMessage } = require("../../functions.js");
const { orange } = require('../../colors.json');
const db = require('quick.db')

const chooseArr = ["✅", "⛔"];
var number = Math.floor(Math.random() * 5000);

  module.exports = {
    config: {
      name: "deal",
      category: "Fun",
      description: "Deal or no deal game. React to one of the emojis to play the game.",
      usage: "!deak",
      category: 'Miscellaneous',
      accessableby: 'Users',
    },
    
      run: async (client, message, args) => {
          
		  var keepRunning = true;
		  while(keepRunning == true) {
        const embed = new RichEmbed()
              .setColor(orange)
             // .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
              .setDescription("That was the banker. Here is your offer. "+ number + "𝓐 Deal or no deal?")
             // .setTimestamp();
          const m = await message.channel.send(embed);
		  
          const reacted = await promptMessage(m, message.author, 30, chooseArr);
		  if (reacted === "⛔")
		  {
			  if (Math.floor(Math.random() * 5 == 1)) {
				  number = 0;
          embed
              .setDescription('')
              .setTitle(result)
              .addField('[**__You Lost :/__**]', number, true)
				  keepRunning = false;
				  await m.clearReactions();
			  }
			  else {
				  number = Math.floor(Math.random() * 5000);
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
	  }
          

  }
      