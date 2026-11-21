import axios from "axios";
export default { name: "foxpic", description: "Photo de renard", usage: "foxpic", category: "api", cooldown: 3, async execute(client, message) { try { const { data } = await axios.get("https://randomfox.ca/floof/", { timeout: 8000 }); await message.channel.send(data.image); } catch { await message.channel.send("❌ Indisponible."); } } };
