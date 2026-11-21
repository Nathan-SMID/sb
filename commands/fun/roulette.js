export default { name: "roulette", aliases: ["roul"], description: "Roulette russe numérique", usage: "roulette", category: "fun", cooldown: 2,
  async execute(client, message) { const n = Math.floor(Math.random() * 37); const c = n === 0 ? "vert" : n % 2 ? "rouge" : "noir"; await message.channel.send(`🎡 **${n}** ${c}`); } };
