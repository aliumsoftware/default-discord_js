const snekfetch = require('snekfetch')
const { RichEmbed } = require("discord.js")
const { orange, red } = require("../../colors.json")

module.exports = {
    config: {
        name: "fish",
        aliases: [],
        usage: "!fish",
        category: "Miscellaneous",
        description: "Sends a chicken from the subreddit r/fish",
        accessableby: "Users"
    },

    run: async (bot, message, args) => {
        let msg = await message.channel.send("Getting you a fish...")
        const { body } = await snekfetch
            .get('https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2013/2-somanyfishon.jpg')
            .query({ limit: 800 });
        const allowed = message.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18);
        if (!allowed.length) return message.channel.send('It seems we are out of fish!, Try again later.');
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
