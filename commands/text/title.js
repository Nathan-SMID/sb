export default { name: "title", aliases: ["tc"], description: "Chaque mot capitalisé", usage: "title <texte>", category: "text", cooldown: 1,
  async execute(client, message, args) { const t = args.join(" "); if (!t) return message.channel.send("❌ Texte ?"); await message.channel.send(t.replace(/\b\w/g, (c) => c.toUpperCase()).slice(0, 1900)); } };
