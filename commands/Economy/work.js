const ms = require("parse-ms");
const db = require("quick.db");
const { RichEmbed } = require("discord.js");
const { orange, red } = require("../../colors.json");

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
let timeout = 14400000 // 14,400,000

let randomizer = Math.floor(Math.random() * 1000) + 1;
let hour4 = await db.fetch(`hour4_${message.author.id}`);
  if(hour4 !== null && timeout - (Date.now() - hour4) > 0) {
let time = ms(timeout - (Date.now() - hour4))
let embed = new RichEmbed()
  .setColor(red)
  .setDescription(`You can work again in **${time.hours}h, ${time.minutes}m, and ${time.seconds}s**.`)
return message.channel.send(embed)
      } else {
db.set(`hour4_${message.author.id}`, Date.now())
db.add(`usrCash_${message.author.id}`, randomizer)
  let e = new RichEmbed()
    .setColor(orange)
    .setDescription(`You earned a **${randomizer} 𝓐** paycheck.`)
  return message.channel.send(e)
      }
    }
  }