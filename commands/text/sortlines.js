export default { name: "sortlines", aliases: ["sl"], description: "Trie les lignes", usage: "sortlines <lignes>", category: "text", cooldown: 1,
  async execute(client, message, args) { const t = args.join(" "); if (!t) return message.channel.send("❌ Texte ?"); await message.channel.send(t.split("\n").sort().join("\n").slice(0, 1900)); } };
