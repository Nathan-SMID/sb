const V = [[1000, "M"], [900, "CM"], [500, "D"], [400, "CD"], [100, "C"], [90, "XC"], [50, "L"], [40, "XL"], [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]];
export default { name: "roman", aliases: ["toroman"], description: "Nombre en chiffres romains", usage: "roman <n>", category: "general", cooldown: 1,
  async execute(client, message, args) { let n = parseInt(args[0], 10); if (!n || n < 1 || n > 3999) return message.channel.send("❌ Entre 1 et 3999."); let o = ""; for (const [v, s] of V) while (n >= v) { o += s; n -= v; } await message.channel.send(`> ${o}`); } };
