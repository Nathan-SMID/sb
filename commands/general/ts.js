export default { name: "ts", aliases: ["totimestamp"], description: "Date vers timestamp Unix", usage: "ts <AAAA-MM-JJ>", category: "general", cooldown: 1,
  async execute(client, message, args) { const d = new Date(args[0]); if (isNaN(d)) return message.channel.send("❌ Date invalide."); await message.channel.send(`> ${Math.floor(d.getTime() / 1000)}`); } };
