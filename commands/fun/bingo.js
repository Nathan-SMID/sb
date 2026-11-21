export default { name: "bingo", aliases: ["grille"], description: "Grille de bingo", usage: "bingo", category: "fun", cooldown: 3,
  async execute(client, message) { const n = new Set(); while (n.size < 5) n.add(Math.floor(Math.random() * 75) + 1); await message.channel.send(`🎱 ${[...n].join(" · ")}`); } };
