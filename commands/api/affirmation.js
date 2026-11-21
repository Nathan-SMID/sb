import axios from "axios";
export default { name: "affirmation", description: "Affirmation positive", usage: "affirmation", category: "api", cooldown: 3, async execute(client, message) { try { const { data } = await axios.get("https://www.affirmations.dev", { timeout: 8000 }); await message.channel.send("> " + data.affirmation); } catch { await message.channel.send("❌ Indisponible."); } } };
