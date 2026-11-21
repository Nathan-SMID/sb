import axios from "axios";
export default { name: "monkey", description: "Photo de singe", usage: "monkey", category: "api", cooldown: 3, async execute(client, message) { try { const { data } = await axios.get("https://some-random-api.com/animal/monkey", { timeout: 8000 }); await message.channel.send(data.image); } catch { await message.channel.send("❌ Indisponible."); } } };
