const { RichEmbed } = require("discord.js");
const { orange } = require("../../colors.json");
const f = require("node-fetch")

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
    f("https://teamtrees.org")
      .then(res => res.json()).then(body => {
      console.log(body.counter.totalTrees)
    })
    }
  }

/* fetch("http://aws.random.cat/meow")
        .then(res => res.json()).then(body => {
        
        
        
        let embed = new RichEmbed()
      .setColor(orange)
      .setDescription(`There has been  planted.

      **__Remember:__**
      1) $1 = 1 Tree
      2) We need to get to 20 million trees by 2020
      3) Donate if you can at [this link](${'https://teamtrees.org'})`)
    message.channel.send(embed)*/