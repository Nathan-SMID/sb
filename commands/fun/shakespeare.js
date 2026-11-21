export default { name: "shakespeare", aliases: ["barde"], description: "Style shakespearien", usage: "shakespeare <texte>", category: "fun", cooldown: 1,
  async execute(client, message, args) { const t = args.join(" "); if (!t) return message.channel.send("❌ Texte ?"); await message.channel.send(`« ${t.replace(/\boui\b/g, "point ne douté-je").replace(/\bnon\b/g, "nenni")}, noble âme. »`); } };
