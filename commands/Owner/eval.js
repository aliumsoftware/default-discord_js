const { RichEmbed } = require("discord.js");
const { orange, red } = require("../../colors.json");
const { inspect } = require("util");

  module.exports = {
    config: {
      name: 'evaluate',
      aliases: ['ev', 'eval'],
      usage: '^evaluate (JavaScript code)',
      description: 'Executes Javascript code.',
      category: 'Owner',
      accessableby: 'Bot Owner'
    },
    
  run: async (client, message, args) => {
      if(message.author.id == '535585397435006987') {
        try {
          
        } catch(e) {
          
        }
      } else {
        return message.react(client.emojis.get("645467660229935135"))
      }
    }
  }

/*
  if(message.author.id == "535585397435006987") {
    try {
      let toEval = args.join(" ")
                let evaluated = inspect(eval(toEval, { depth: 0 }));
                if(toEval === "client.token") return message.author.send(embed)
                if (!toEval) {
                  let airE = new RichEmbed()
                    .setColor(red)
                    .setDescription(`Error while evaluating: \`null\``)
                    return message.channel.send(airE);
                } else {
                    let hrStart = process.hrtime()
                    let hrDiff;
                    hrDiff = process.hrtime(hrStart);
                  let evaluateE = new RichEmbed()
                    .setColor(blue)
                    .setDescription(`Took: *${hrDiff[0] > 0 ? `${hrDiff[0]}s ` : ''}${hrDiff[1] / 1000000}ms.*\`\`\`javascript\n${evaluated}\`\`\``, { maxLength: 1900 })
                  return message.channel.send(evaluateE)
                }
    } catch(e) {
      let undefinedE = new RichEmbed()
        .setColor(red)
        .setDescription(`Error while evaluating: \`${e.message}\``)
      return message.channel.send(undefinedE);
    }
  } else {
    return;
  }
    }
  }*/