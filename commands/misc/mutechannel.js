export default { name: "mutechannel", aliases: ["mutech"], description: "Met le salon en muet", usage: "mutechannel", category: "misc", cooldown: 2,
  async execute(client, message) { await client.api.channels(message.channel.id).settings.put({ data: { muted: true } }).catch((e) => message.channel.send("❌ " + e.message)); await message.channel.send("> 🔇 salon muet"); } };
