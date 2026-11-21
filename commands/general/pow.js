export default { name: "pow", aliases: ["puissance"], description: "Puissance", usage: "pow <base> <exp>", category: "general", cooldown: 1,
  async execute(client, message, args) { const a = parseFloat(args[0]), b = parseFloat(args[1]); if (isNaN(a) || isNaN(b)) return message.channel.send("❌ Usage : `pow 2 10`"); await message.channel.send(`> ${Math.pow(a, b)}`); } };
