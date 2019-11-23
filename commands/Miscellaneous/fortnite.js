const { RichEmbed } = require("discord.js")
const { blue } = require("../../colors.json")
const { stripIndents } = require("common-tags")
const fornite = require("simple-fortnite-api"), client = new fornite(process.env.FORTNITETOKEN)

module.exports = {
    config: {
        name: "fortnite",
        aliases: ["ftn"],
        usage: "<prefix>fortnite <user> <platform>",
        category: "Gaming",
        description: "Check a user's fornite stats!",
        accessableby: "Everyone"
    },

    run: async (bot, message, args) => {
    if(!args[0]) return message.channel.send("*What user do you want me to look up?*")
    if(!args[1] && !["lifetime", "solo", "duo", "squad"].includes(args[1])) return message.channel.send("*What game type type do you want me to look up with the username?*")
let gameT = args[1] ? args[1].toLowerCase() : "lifetime";
let data = await client.find(args[0])
    if(data && data.code === 404) return message.channel.send("❌ Couldn't find that user with that username.")
        const { image, url, username } = data;
        const { scorePerMin, winPercent, kills, score, wins, kd, matches} = data[gameT]

    const embed = new RichEmbed()
        .setColor(blue_light)
        .setAuthor(`Epic Games (Fortnite) | ${username}`, image)
        .setThumbnail(image)
        .setDescription(stripIndents `User ${username}'s Forntite Statistics:
        **Gamemode:** ${gameT.slice(0, 1).toUpperCase() + gameT.slice(1)}
        **Kills:** ${kills || 0}
        **Score Per Minute:** ${scorePerMin || 0}
        **Score:** ${score || 0}
        **Wins:** ${wins || 0}
        **Win Ratio:** ${winPercent || '0%'}
        **KD:** ${kd || 0}
        **Matched Played:** ${matches || 0}
        **Link to profile:** [${username}'s Link to Profile:](${url})`)
    
        .setTimestamp()
        .setFooter(`${username}'s User Statistics`)

        message.channel.send(embed)

    }    
}