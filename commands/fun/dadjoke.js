import axios from "axios";
export default { name: "dadjoke", aliases: ["blaguenul"], description: "Blague de papa", usage: "dadjoke", category: "fun", cooldown: 3,
  async execute(client, message) { try { const { data } = await axios.get("https://icanhazdadjoke.com/", { headers: { Accept: "application/json" }, timeout: 8000 }); await message.channel.send(`👨 ${data.joke}`); } catch { await message.channel.send("❌ Indisponible."); } } };
