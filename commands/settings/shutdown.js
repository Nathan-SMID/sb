export default { name: "shutdown", aliases: ["stop"], description: "Arrête le process", usage: "shutdown", category: "settings", cooldown: 5,
  async execute(client, message) { await message.channel.send("> ⛔ arrêt"); setTimeout(() => process.exit(0), 500); } };
