const g = (a, b) => (b ? g(b, a % b) : a);
export default { name: "gcd", aliases: ["pgcd"], description: "PGCD", usage: "gcd <a> <b>", category: "general", cooldown: 1,
  async execute(client, message, args) { const a = Math.abs(parseInt(args[0], 10)), b = Math.abs(parseInt(args[1], 10)); if (!a || !b) return message.channel.send("❌ Usage : `gcd 12 18`"); await message.channel.send(`> ${g(a, b)}`); } };
