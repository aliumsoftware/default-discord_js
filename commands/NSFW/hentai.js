const snekfetch = require('snekfetch')
const { RichEmbed } = require("discord.js")
const { orange } = require("../../colors.json")

module.exports = {
    config: {
        name: "hentai",
       //aliases: [],
        usage: "^hentai",
        category: "NSFW",
        description: "NSFW pictures from the r/porn subreddit.",
        accessableby: "Users 18+"
    },

    run: async (bot, message, args) => {
          if(!message.channel.nsfw) return message.reply('Please run this in a `NSFW` channel.');
        let msg = await message.channel.send("Grabbing you some unholy things...")
        const { body } = await snekfetch
            .get('https://www.reddit.com/r/hentai.json?sort=hot&t=month')
            .query({ limit: 800 });
        const allowed = message.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18);
        if (!allowed.length) return message.channel.send('Error: Try again later');
        const randomnumber = Math.floor(Math.random() * allowed.length)
        let embed = new RichEmbed()
        .setColor(orange)
        .setTitle(allowed[randomnumber].data.title)
        //.setDescription("Posted by: " + allowed[randomnumber].data.author)
        .setImage(allowed[randomnumber].data.url)
        .setFooter("👍 " + allowed[randomnumber].data.ups + " | 📝 " + allowed[randomnumber].data.num_comments)
        msg.edit(embed)
    }    
}