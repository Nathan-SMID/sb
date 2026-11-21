export default { name: "revwords", aliases: ["rw"], description: "Inverse l'ordre des mots", usage: "revwords <texte>", category: "text", cooldown: 1,
  async execute(client, message, args) { const t = args.join(" "); if (!t) return message.channel.send("❌ Texte ?"); await message.channel.send(t.split(/\s+/).reverse().join(" ").slice(0, 1900)); } };
