import axios from "axios";
export default { name: "shibe", description: "Photo de shiba", usage: "shibe", category: "api", cooldown: 3, async execute(client, message) { try { const { data } = await axios.get("https://shibe.online/api/shibes?count=1", { timeout: 8000 }); await message.channel.send(data[0]); } catch { await message.channel.send("❌ Indisponible."); } } };
