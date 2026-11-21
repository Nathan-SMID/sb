const g = (a, b) => (b ? g(b, a % b) : a);
export default { name: "lcm", aliases: ["ppcm"], description: "PPCM", usage: "lcm <a> <b>", category: "general", cooldown: 1,
  async execute(client, message, args) { const a = Math.abs(parseInt(args[0], 10)), b = Math.abs(parseInt(args[1], 10)); if (!a || !b) return message.channel.send("❌ Usage : `lcm 4 6`"); await message.channel.send(`> ${(a * b) / g(a, b)}`); } };
