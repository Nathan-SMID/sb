import axios from "axios";
export default { name: "koala", description: "Photo de koala", usage: "koala", category: "api", cooldown: 3, async execute(client, message) { try { const { data } = await axios.get("https://some-random-api.com/animal/koala", { timeout: 8000 }); await message.channel.send(data.image); } catch { await message.channel.send("❌ Indisponible."); } } };
