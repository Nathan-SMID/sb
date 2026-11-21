import axios from "axios";
export default { name: "useless", aliases: ["inutile"], description: "Fait inutile", usage: "useless", category: "fun", cooldown: 3,
  async execute(client, message) { try { const { data } = await axios.get("https://uselessfacts.jsph.pl/api/v2/facts/random", { timeout: 8000 }); await message.channel.send(`🧠 ${data.text}`); } catch { await message.channel.send("❌ Indisponible."); } } };
