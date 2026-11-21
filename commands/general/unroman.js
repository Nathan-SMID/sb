const M = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
export default { name: "unroman", aliases: ["fromroman"], description: "Chiffres romains vers nombre", usage: "unroman <romain>", category: "general", cooldown: 1,
  async execute(client, message, args) { const s = (args[0] || "").toUpperCase(); if (!/^[IVXLCDM]+$/.test(s)) return message.channel.send("❌ Romain invalide."); let o = 0; for (let i = 0; i < s.length; i++) o += M[s[i]] < M[s[i + 1]] ? -M[s[i]] : M[s[i]]; await message.channel.send(`> ${o}`); } };
