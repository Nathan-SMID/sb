export default { name: "hexenc", aliases: ["tohex"], description: "Convertit en hexadécimal", usage: "hexenc <texte>", category: "text", cooldown: 1,
  async execute(client, message, args) { const t = args.join(" "); if (!t) return message.channel.send("❌ Texte ?"); await message.channel.send(Buffer.from(t).toString("hex").slice(0, 1900)); } };
