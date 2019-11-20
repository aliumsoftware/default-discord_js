const s = require("yt-search")
const { RichEmbed } = require("discord.js")
 
  module.exports = {
    config: {
    name: "search",
    },
    
  run: async (client, message, args, ops) => {
    s(args.join(' '), async function(err, res) {
    if(err) return message.channel.send(`Something went wrong mate.`)
      let videos = res.videos.slice(0,10)
      let resp = ``;
        
        for ( var i in videos ) {
          resp += `[${parseInt(i)+1}] \`${videos[i].title}\`\n`
        }
    
        resp += `\nChoose a number bewtween 1-${videos.length}`
        message.channel.send(resp)
    const filter = m => !isNaN(m.content) && m.content < videos.length+1 && m.content > 0;
    const collector = message.channel.createMessageCollector(filter);
    
    collector.videos = videos
    collector.on('collect', async function(m) {
      let commandFile = require("./play.js")
      commandFile.run(client, message, [this.videos[parseInt(m.content)-1].url], ops)
      
      
        })
      }) 
    }
  }