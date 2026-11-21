import axios from "axios";
export default { name: "dogfact", aliases: ["chienfait"], description: "Fait sur les chiens", usage: "dogfact", category: "fun", cooldown: 3,
  async execute(client, message) { try { const { data } = await axios.get("https://dogapi.dog/api/v2/facts", { timeout: 8000 }); await message.channel.send(`🐶 ${data.data[0].attributes.body}`); } catch { await message.channel.send("❌ Indisponible."); } } };
