import axios from "axios";
export default { name: "raccoon", description: "Photo de raton laveur", usage: "raccoon", category: "api", cooldown: 3, async execute(client, message) { try { const { data } = await axios.get("https://some-random-api.com/animal/raccoon", { timeout: 8000 }); await message.channel.send(data.image); } catch { await message.channel.send("❌ Indisponible."); } } };
