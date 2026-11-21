export default { name: "camel", aliases: ["camelcase"], description: "camelCase", usage: "camel <texte>", category: "text", cooldown: 1,
  async execute(client, message, args) { const t = args.join(" "); if (!t) return message.channel.send("❌ Texte ?"); await message.channel.send(t.toLowerCase().replace(/[^a-z0-9]+(.)/g, (m, c) => c.toUpperCase()).slice(0, 1900)); } };
