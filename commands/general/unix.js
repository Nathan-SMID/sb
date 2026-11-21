export default { name: "unix", aliases: ["fromtimestamp"], description: "Timestamp vers date", usage: "unix <secondes>", category: "general", cooldown: 1,
  async execute(client, message, args) { const s = parseInt(args[0], 10); if (isNaN(s)) return message.channel.send("❌ Timestamp invalide."); await message.channel.send(`> ${new Date(s * 1000).toUTCString()}`); } };
