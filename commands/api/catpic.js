import axios from "axios";
export default { name: "catpic", description: "Photo de chat", usage: "catpic", category: "api", cooldown: 3, async execute(client, message) { try { const { data } = await axios.get("https://api.thecatapi.com/v1/images/search", { timeout: 8000 }); await message.channel.send(data[0].url); } catch { await message.channel.send("❌ Indisponible."); } } };
