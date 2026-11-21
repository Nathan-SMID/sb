export default { name: "minmax", aliases: ["mm"], description: "Min et max", usage: "minmax <n...>", category: "general", cooldown: 1,
  async execute(client, message, args) { const n = args.map(Number).filter((x) => !isNaN(x)); if (!n.length) return message.channel.send("❌ Nombres ?"); await message.channel.send(`> min ${Math.min(...n)} · max ${Math.max(...n)}`); } };
