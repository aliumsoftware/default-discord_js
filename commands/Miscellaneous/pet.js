
const { RichEmbed } = require("discord.js");
const { promptMessage } = require("../../functions.js");
const { brown } = require('../../colors.json');

const chooseArr = ["✅", "❌"];

  module.exports = {
    config: {
      name: "pet",
      category: "Fun",
      description: "Pet the doggo event. React to one of the emojis to play the event.",
      usage: "!pet",
      category: 'Miscellaneous',
      accessableby: 'Users',
    },
    
      run: async (client, message, args) => {
          const embed = new RichEmbed()
              .setColor(brown)
             // .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
              .setDescription("Will you pet the doggo? 🐶")
             // .setTimestamp();

          const m = await message.channel.send(embed);
          const reacted = await promptMessage(m, message.author, 30, chooseArr);

          const botChoice = chooseArr[Math.floor(Math.random() * chooseArr.length)];

          const result = await getResult(reacted, botChoice);
          await m.clearReactions();

          embed
              .setDescription('')
              .setTitle(result)
              .addField('[**__You\'ve Chosen:__**]', reacted, true)
              //.addField(result, `${reacted} vs ${botChoice}`);

          m.edit(embed);

          function getResult(me, clientChosen) {
              if ((me === "✅" && clientChosen === "❌") ||
                  (me === "✅" && clientChosen === "✅") ||
                  (me === "✅" && clientChosen === "❌")) {
                      return "**You pet it! You're great! 🐶**";
              } else {
                  return "**You didn't pet it! You're a horrible person. :(**";
              }
          }
      }
  }