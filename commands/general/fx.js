import axios from "axios";
export default { name: "fx", aliases: ["taux"], description: "Taux de change", usage: "fx <devise> [cible]", category: "general", cooldown: 5,
  async execute(client, message, args) { const from = (args[0] || "USD").toUpperCase(); const to = (args[1] || "EUR").toUpperCase(); try { const { data } = await axios.get(`https://open.er-api.com/v6/latest/${from}`, { timeout: 10000 }); const r = data.rates[to]; if (!r) throw 0; await message.channel.send(`> 1 ${from} = ${r} ${to}`); } catch { await message.channel.send("❌ Devise inconnue."); } } };
