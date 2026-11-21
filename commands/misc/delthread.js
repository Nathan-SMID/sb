export default { name: "delthread", aliases: ["dt"], description: "Supprime le fil du salon", usage: "delthread", category: "misc", cooldown: 3,
  async execute(client, message) { if (!message.channel.isThread?.()) return message.channel.send("❌ Pas dans un fil."); await message.channel.delete().catch((e) => message.channel.send("❌ " + e.message)); } };
