import axios from "axios";
export default { name: "catfact", aliases: ["chatfait"], description: "Fait sur les chats", usage: "catfact", category: "fun", cooldown: 3,
  async execute(client, message) { try { const { data } = await axios.get("https://catfact.ninja/fact", { timeout: 8000 }); await message.channel.send(`🐱 ${data.fact}`); } catch { await message.channel.send("❌ Indisponible."); } } };
