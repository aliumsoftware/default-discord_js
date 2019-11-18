const ms = require("parse-ms");
const db = require("quick.db");
const { RichEmbed } = require("discord.js");
const { orange } = require("../../colors.json");

  module.exports = {
    config: {
      name: 'work',
      aliases: ['job'],
      usage: '^work',
      description: 'A way to earn money',
      category: 'Economy',
      accessableby: 'Users'
    },
    
  run: async (client, message, args) => {
let usrBalance = await db.fetch(`usrCash_${message.author.id}`);
  if(usrBalance === null) usrBalance = 0;    
let timeout = 1800000

  
let hour4 = await db.fetch(`hour4_${message.author.id}`);
  if(hour4 !== null && timeout - (Date.now() - hour4) > 0) {
let time = ms(timeout - (Date.now() - hour4))
let embed = new RichEmbed()
  .setColor(orange)
  .setDescription(``)
        
        }
    
    }
  }