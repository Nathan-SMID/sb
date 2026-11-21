export default { name: "rand", aliases: ["randint"], description: "Entier aléatoire", usage: "rand <min> <max>", category: "general", cooldown: 1,
  async execute(client, message, args) { const a = parseInt(args[0], 10) || 0, b = parseInt(args[1], 10) || 100; const lo = Math.min(a, b), hi = Math.max(a, b); await message.channel.send(`> ${Math.floor(Math.random() * (hi - lo + 1)) + lo}`); } };
