export default { name: "sum", aliases: ["somme"], description: "Somme", usage: "sum <n...>", category: "general", cooldown: 1,
  async execute(client, message, args) { const n = args.map(Number).filter((x) => !isNaN(x)); if (!n.length) return message.channel.send("❌ Nombres ?"); await message.channel.send(`> ${n.reduce((a, b) => a + b, 0)}`); } };
