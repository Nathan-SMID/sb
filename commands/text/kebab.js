export default { name: "kebab", aliases: ["kebabcase"], description: "kebab-case", usage: "kebab <texte>", category: "text", cooldown: 1,
  async execute(client, message, args) { const t = args.join(" "); if (!t) return message.channel.send("❌ Texte ?"); await message.channel.send(t.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 1900)); } };
