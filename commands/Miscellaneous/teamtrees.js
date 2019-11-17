const { RichEmbed } = require("discord.js");
const snek = require("snekfetch");
const { orange } = require("../../colors.json");

  module.exports = {
    config: {
      name: 'treecount',
      aliases: ['tcount', 'teamtrees'],
      usage: '^treecount',
      description: 'Displays how many trees have been planted.',
      category: 'Miscellaneous',
      accessableby: 'Users'
    },
    
  run: async (client, message, args) => {
    const { body } = await snek
            .get('https://teamtrees.org/')
            .query({ limit: 800 });
    let embed = new RichEmbed()
      .setColor(orange)
      .setDescription(`There has been **${[body].data.totalTrees}** planted.

      **__Remember:__**
      1) $1 = 1 Tree
      2) We need to get to 20 million trees by 2020
      3) Donate if you can at [this link](${'https://teamtrees.org'})`)
    message.channel.send(embed)
    }
  }