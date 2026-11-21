import axios from "axios";
export default { name: "kanye", description: "Citation de Kanye West", usage: "kanye", category: "api", cooldown: 3, async execute(client, message) { try { const { data } = await axios.get("https://api.kanye.rest", { timeout: 8000 }); await message.channel.send("> " + data.quote); } catch { await message.channel.send("❌ Indisponible."); } } };
