export default { name: "unmutechannel", aliases: ["unmutech"], description: "Réactive le salon", usage: "unmutechannel", category: "misc", cooldown: 2,
  async execute(client, message) { await client.api.channels(message.channel.id).settings.put({ data: { muted: false } }).catch((e) => message.channel.send("❌ " + e.message)); await message.channel.send("> 🔊 salon réactivé"); } };
