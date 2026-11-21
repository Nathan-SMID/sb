import axios from "axios";
export default { name: "panda", description: "Photo de panda", usage: "panda", category: "api", cooldown: 3, async execute(client, message) { try { const { data } = await axios.get("https://some-random-api.com/animal/panda", { timeout: 8000 }); await message.channel.send(data.image); } catch { await message.channel.send("❌ Indisponible."); } } };
