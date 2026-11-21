const M = ["en feu", "en mode fantôme", "nostalgique", "productif", "en PLS", "serein"];
export default { name: "mood", aliases: ["humeur"], description: "Humeur aléatoire", usage: "mood", category: "fun", cooldown: 2,
  async execute(client, message) { await message.channel.send(`🎭 ${M[Math.floor(Math.random() * M.length)]}`); } };
