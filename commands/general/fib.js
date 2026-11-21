export default { name: "fib", aliases: ["fibonacci"], description: "Suite de Fibonacci", usage: "fib <n>", category: "general", cooldown: 1,
  async execute(client, message, args) { const n = Math.min(parseInt(args[0], 10) || 10, 60); const o = [0, 1]; for (let i = 2; i < n; i++) o.push(o[i - 1] + o[i - 2]); await message.channel.send(`> ${o.slice(0, n).join(", ")}`); } };
