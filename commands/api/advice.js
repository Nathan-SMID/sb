import axios from "axios";
export default { name: "advice", description: "Conseil aléatoire", usage: "advice", category: "api", cooldown: 3, async execute(client, message) { try { const { data } = await axios.get("https://api.adviceslip.com/advice", { timeout: 8000 }); await message.channel.send("> " + data.slip.advice); } catch { await message.channel.send("❌ Indisponible."); } } };
