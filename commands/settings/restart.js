export default { name: "restart", aliases: ["reboot"], description: "Redémarre le process", usage: "restart", category: "settings", cooldown: 5,
  async execute(client, message) { await message.channel.send("> 🔄 redémarrage…"); setTimeout(() => process.exit(0), 500); } };
