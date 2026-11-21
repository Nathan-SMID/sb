import axios from "axios";
export default { name: "chucknorris", description: "Blague Chuck Norris", usage: "chucknorris", category: "api", cooldown: 3, async execute(client, message) { try { const { data } = await axios.get("https://api.chucknorris.io/jokes/random", { timeout: 8000 }); await message.channel.send("> " + data.value); } catch { await message.channel.send("❌ Indisponible."); } } };
