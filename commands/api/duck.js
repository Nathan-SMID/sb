import axios from "axios";
export default { name: "duck", description: "Photo de canard", usage: "duck", category: "api", cooldown: 3, async execute(client, message) { try { const { data } = await axios.get("https://random-d.uk/api/random", { timeout: 8000 }); await message.channel.send(data.url); } catch { await message.channel.send("❌ Indisponible."); } } };
