import axios from "axios";
export default { name: "http", aliases: ["status"], description: "Code HTTP d'une URL", usage: "http <url>", category: "general", cooldown: 3,
  async execute(client, message, args) { if (!args[0]) return message.channel.send("❌ URL ?"); try { const r = await axios.get(args[0], { timeout: 10000, validateStatus: () => true }); await message.channel.send(`> **${r.status}** ${r.statusText || ""}`); } catch { await message.channel.send("❌ URL injoignable."); } } };
