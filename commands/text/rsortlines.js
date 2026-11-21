export default { name: "rsortlines", aliases: ["rsl"], description: "Trie les lignes à l'envers", usage: "rsortlines <lignes>", category: "text", cooldown: 1,
  async execute(client, message, args) { const t = args.join(" "); if (!t) return message.channel.send("❌ Texte ?"); await message.channel.send(t.split("\n").sort().reverse().join("\n").slice(0, 1900)); } };
