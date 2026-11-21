export default { name: "clonechannel", aliases: ["cc"], description: "Clone le salon actuel", usage: "clonechannel", category: "server", cooldown: 5,
  async execute(client, message) { await message.channel.clone().then((c) => message.channel.send(`> 🧬 ${c}`)).catch((e) => message.channel.send("❌ " + e.message)); } };
