export default { name: "guildbanner", aliases: ["gb"], description: "Bannière du serveur", usage: "guildbanner", category: "server", cooldown: 3,
  async execute(client, message) { if (!message.guild) return message.channel.send("❌ Serveur uniquement."); const b = message.guild.bannerURL({ size: 1024 }); await message.channel.send(b ? `> 🖼️ ${b}` : "❌ Aucune bannière."); } };
