import axios from "axios";
export default { name: "ip", aliases: ["ipinfo"], description: "Infos sur une IP", usage: "ip <ip>", category: "general", cooldown: 4,
  async execute(client, message, args) { const q = args[0] || ""; try { const { data } = await axios.get(`http://ip-api.com/json/${encodeURIComponent(q)}`, { timeout: 8000 }); if (data.status !== "success") throw 0; await message.channel.send(`> 🌍 ${data.country} · ${data.regionName} · ${data.city}\n> 📡 ${data.isp}\n> 🕒 ${data.timezone}`); } catch { await message.channel.send("❌ IP invalide."); } } };
