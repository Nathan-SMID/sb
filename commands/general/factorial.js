export default { name: "factorial", aliases: ["fact2"], description: "Factorielle", usage: "factorial <n>", category: "general", cooldown: 1,
  async execute(client, message, args) { const n = Math.min(parseInt(args[0], 10) || 5, 170); if (n < 0) return message.channel.send("❌ Négatif."); let r = 1; for (let i = 2; i <= n; i++) r *= i; await message.channel.send(`> ${r}`); } };
