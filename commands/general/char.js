export default { name: "char", aliases: ["charcode"], description: "Code d'un caractère ou l'inverse", usage: "char <c|code>", category: "general", cooldown: 1,
  async execute(client, message, args) { const a = args[0]; if (!a) return message.channel.send("❌ Caractère ou code ?"); await message.channel.send(`> ${/^\d+$/.test(a) ? String.fromCodePoint(parseInt(a, 10)) : a.codePointAt(0)}`); } };
