export default { name: "roundn", aliases: ["arrondi"], description: "Arrondit à N décimales", usage: "roundn <n> <décimales>", category: "general", cooldown: 1,
  async execute(client, message, args) { const n = parseFloat(args[0]), d = Math.min(parseInt(args[1], 10) || 0, 10); if (isNaN(n)) return message.channel.send("❌ Nombre ?"); await message.channel.send(`> ${n.toFixed(d)}`); } };
