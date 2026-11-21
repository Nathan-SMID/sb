export default { name: "nsfwchannel", aliases: ["nsfwch"], description: "Bascule le salon en NSFW", usage: "nsfwchannel", category: "server", cooldown: 3,
  async execute(client, message) { await message.channel.setNSFW(!message.channel.nsfw).then(() => message.channel.send(`> ${message.channel.nsfw ? "🔞 activé" : "✅ désactivé"}`)).catch((e) => message.channel.send("❌ " + e.message)); } };
