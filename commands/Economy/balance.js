const { RichEmbed } = require("discord.js");
const { orange } = require("../../colors.json");
const db = require("quick.db");

  module.exports = {
    config: {
      name: 'balance',
      aliases: ['bal', 'bank', 'expenses', 'amount'],
      usage: '^balance [@user | id]',
      description: 'Displays a users balance',
      category: 'Economy',
      accessableby: 'Users'
    },
    
  run: async (client, message, args) => {
let m = message.mentions.members.first() || message.author ||message.guild.members.get(args[0]);
let usrBalance = await db.fetch(`cash_${m.id}`);
  if(usrBalance === null) usrBalance = 0;

//let usrBalance = await db.fetch(`cash_${}`)    
    }
  }