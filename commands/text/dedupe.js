export default { name: "dedupe", aliases: ["uniq"], description: "Supprime les lignes en double", usage: "dedupe <lignes>", category: "text", cooldown: 1,
  async execute(client, message, args) { const t = args.join(" "); if (!t) return message.channel.send("❌ Texte ?"); await message.channel.send([...new Set(t.split("\n"))].join("\n").slice(0, 1900)); } };
