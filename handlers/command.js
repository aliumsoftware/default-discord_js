const { readdirSync } = require("fs");

  module.exports = (client) => {
    const load = dirs => {
      const commands = readdirSync(`./commands/${dirs}/`).filter(d => d.endsWith('.js'));
      
        for ( let file of commands ) {
          
        }
    }
  }
  
  /* const { readdirSync } = require("fs")
const ascii = require("ascii-table")

let table = new ascii("Commands")
table.setHeading("Command", "Status");

module.exports = (client) => {
  readdirSync("./commands/").forEach(dir => {
    const commands = readdirSync(`./commands/${dir}/`).filter(file => file.endsWith("js"));
    
      for ( let file of commands ) {
        let pull = require(`../commands/${dir}/${file}`);
        
        if(pull.name) {
          client.commands.set(pull.name, pull)
          table.addRow(file, '|✅| ~ Working')
        } else {
        table.addRow(file, `|❌| ~ Not Working`)
          continue;
        }
        if (pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => client.aliases.set(alias, pull.name));
      }
  })
  console.log(table.toString())
}*/