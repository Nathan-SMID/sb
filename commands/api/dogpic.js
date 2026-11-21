import axios from "axios";
export default { name: "dogpic", description: "Photo de chien", usage: "dogpic", category: "api", cooldown: 3, async execute(client, message) { try { const { data } = await axios.get("https://dog.ceo/api/breeds/image/random", { timeout: 8000 }); await message.channel.send(data.message); } catch { await message.channel.send("❌ Indisponible."); } } };
