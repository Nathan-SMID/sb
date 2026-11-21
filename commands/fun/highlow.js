export default { name: "highlow", aliases: ["hl"], description: "Nombre au-dessus ou en dessous de 50", usage: "highlow", category: "fun", cooldown: 2,
  async execute(client, message) { const n = Math.floor(Math.random() * 100) + 1; await message.channel.send(`🎲 **${n}** → ${n > 50 ? "haut" : n < 50 ? "bas" : "pile"}`); } };
