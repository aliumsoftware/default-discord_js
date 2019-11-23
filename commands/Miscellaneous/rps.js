const { RichEmbed } = require('discord.js');
const { promptMessage } = require('../../functions.js');
const { orange } = require('../../colors.json');

  module.exports = {
    config: {
      name: 'rps',
      aliases: [],
      usage: '^rps',
      description: 'Plays a good game of rock paper scissors with you.',
      category: 'Miscellaneous',
      accessableby: 'Users'
    },
    
  run: async (client, message, args) => {
  const chooseArr = [`${client.emojis.get('645467691939004426')}`, `${client.emojis.get('647804934900809738')}`, `${client.emojis.get('647805902791114822')}`];
  const embed = new RichEmbed()
    .setColor(orange)
    .setDescription("Add a reaction to one of these emojis to play the game!")
  
  const m = await message.channel.send(embed);
  const reacted = await promptMessage(m, message.author, 30, chooseArr);
  const clientChoice = chooseArr[Math.floor(Math.random() * chooseArr.length)];
  const res = await getResult(reacted, clientChoice);
    await m.clearReactions();
    }
  }


/* 
const { RichEmbed } = require("discord.js");
const { promptMessage } = require("../../functions.js");

const chooseArr = ["🗻", "📰", "✂"];

module.exports = {
    name: "rps",
    category: "Fun",
    description: "Rock Paper Scissors game. React to one of the emojis to play the game.",
    usage: "rps",
    run: async (bot, message, args) => {
        const embed = new RichEmbed()
            .setColor("#ffffff")
            .setFooter(message.guild.me.displayName, bot.user.displayAvatarURL)
            .setDescription("Add a reaction to one of these emojis to play the game!")
            .setTimestamp();

        const m = await message.channel.send(embed);
        const reacted = await promptMessage(m, message.author, 30, chooseArr);

        const botChoice = chooseArr[Math.floor(Math.random() * chooseArr.length)];

        const result = await getResult(reacted, botChoice);
        await m.clearReactions();

        embed
            .setDescription("")
            .addField(result, `${reacted} vs ${botChoice}`);

        m.edit(embed);

        function getResult(me, clientChosen) {
            if ((me === "🗻" && clientChosen === "✂") ||
                (me === "📰" && clientChosen === "🗻") ||
                (me === "✂" && clientChosen === "📰")) {
                    return "**You won!**";
            } else if (me === clientChosen) {
                return "**It's a tie!**";
            } else {
                return "**You lost!**";
            }
        }
    }
} */