var fs = require("fs");
var path = require('path');

module.exports = async (client) => {
  let jsonPath = path.join(__dirname, '..', '..', 'bot.json');
  let json = JSON.parse(fs.readFileSync(jsonPath))
  console.log(`❯ Ready! ${client.user.tag} is ready.`);
  client.user.setActivity(json.message, { type: json.status})
};