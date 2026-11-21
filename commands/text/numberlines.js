export default { name: "numberlines", aliases: ["nl"], description: "Numérote les lignes", usage: "numberlines <lignes>", category: "text", cooldown: 1,
  async execute(client, message, args) { const t = args.join(" "); if (!t) return message.channel.send("❌ Texte ?"); await message.channel.send(t.split("\n").map((l, i) => `${i + 1}. ${l}`).join("\n").slice(0, 1900)); } };
