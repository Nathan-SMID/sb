export default { name: "weekday", aliases: ["jour"], description: "Jour de la semaine d'une date", usage: "weekday <AAAA-MM-JJ>", category: "general", cooldown: 1,
  async execute(client, message, args) { const d = new Date(args[0]); if (isNaN(d)) return message.channel.send("❌ Date invalide."); await message.channel.send(`> ${d.toLocaleDateString("fr-FR", { weekday: "long" })}`); } };
