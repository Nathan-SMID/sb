import axios from "axios";
export default { name: "birb", description: "Photo d'oiseau", usage: "birb", category: "api", cooldown: 3, async execute(client, message) { try { const { data } = await axios.get("https://some-random-api.com/animal/bird", { timeout: 8000 }); await message.channel.send(data.image); } catch { await message.channel.send("❌ Indisponible."); } } };
