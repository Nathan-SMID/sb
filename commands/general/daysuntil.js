export default { name: "daysuntil", aliases: ["jusqua"], description: "Jours jusqu'à une date", usage: "daysuntil <AAAA-MM-JJ>", category: "general", cooldown: 1,
  async execute(client, message, args) { const d = new Date(args[0]); if (isNaN(d)) return message.channel.send("❌ Date invalide."); await message.channel.send(`> **${Math.ceil((d - Date.now()) / 86400000)}** jours`); } };
