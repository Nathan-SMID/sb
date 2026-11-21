import axios from "axios";
export default { name: "waifu", aliases: ["animepic"], description: "Image waifu", usage: "waifu", category: "media", cooldown: 3,
  async execute(client, message) { try { const { data } = await axios.get("https://waifu.pics/api/sfw/waifu", { timeout: 8000 }); await message.channel.send(data.url); } catch { await message.channel.send("❌ Indisponible."); } } };
