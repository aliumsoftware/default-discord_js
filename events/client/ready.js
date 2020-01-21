module.exports = async (client) => {
  console.log(`❯ Ready! ${client.user.tag} is ready.`);
  client.user.setActivity('Us Fail at Code', { type: "WATCHING"})
};