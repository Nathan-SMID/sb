export default { name: "randfloat", aliases: ["randf"], description: "Flottant aléatoire", usage: "randfloat <min> <max>", category: "general", cooldown: 1,
  async execute(client, message, args) { const a = parseFloat(args[0]) || 0, b = parseFloat(args[1]) || 1; await message.channel.send(`> ${(Math.random() * (Math.max(a, b) - Math.min(a, b)) + Math.min(a, b)).toFixed(4)}`); } };
