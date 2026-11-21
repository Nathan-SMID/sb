export default { name: "loto", aliases: ["lotto"], description: "Grille de loto", usage: "loto", category: "fun", cooldown: 3,
  async execute(client, message) { const n = new Set(); while (n.size < 6) n.add(Math.floor(Math.random() * 49) + 1); await message.channel.send(`🎟️ ${[...n].sort((a, b) => a - b).join(" · ")}`); } };
