export default { name: "cowboy", aliases: ["yeehaw"], description: "Parle comme un cowboy", usage: "cowboy <texte>", category: "fun", cooldown: 1,
  async execute(client, message, args) { const t = args.join(" "); if (!t) return message.channel.send("❌ Texte ?"); await message.channel.send(`🤠 ${t.replace(/\boui\b/g, "yep").replace(/\bnon\b/g, "nope")}, partenaire.`); } };
