module.exports = async (client) => {
  console.log(`❯ Ready! ${client.user.tag} is ready.`);
  client.user.setActivity('^help', { type: "PLAYING"})
};