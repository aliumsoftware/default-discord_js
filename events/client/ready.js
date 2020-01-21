module.exports = async (client) => {
  console.log(`❯ Ready! ${client.user.tag} is ready.`);
  client.user.setActivity('Aidens Lounge', { type: "WATCHING"})
};