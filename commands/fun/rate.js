export default { name: "rate", aliases: ["note"], description: "Note un truc sur 100", usage: "rate <chose>", category: "fun", cooldown: 2,
  async execute(client, message, args) { const t = args.join(" "); if (!t) return message.channel.send("❌ Quoi ?"); let h = 0; for (const c of t) h = (h * 31 + c.charCodeAt(0)) % 101; await message.channel.send(`📊 **${t}** : **${h}/100**`); } };
