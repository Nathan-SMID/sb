const J = ["journée de merde", "journée parfaite pour coder", "journée à ne rien faire", "journée sous tension", "journée à surprises", "journée de repos"];
export default { name: "today", aliases: ["aujourdhui"], description: "Type de journée", usage: "today", category: "fun", cooldown: 2,
  async execute(client, message) { await message.channel.send(`📅 Aujourd'hui : ${J[Math.floor(Math.random() * J.length)]}.`); } };
