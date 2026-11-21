export default { name: "energy", aliases: ["energie"], description: "Ton énergie du moment", usage: "energy", category: "fun", cooldown: 2,
  async execute(client, message) { const n = Math.floor(Math.random() * 101); await message.channel.send(`🔋 **${message.author.username}** : ${n}% ${n > 70 ? "⚡" : n > 30 ? "🙂" : "🪫"}`); } };
