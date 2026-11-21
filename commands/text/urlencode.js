export default { name: "urlencode", aliases: ["ue"], description: "Encode une URL", usage: "urlencode <texte>", category: "text", cooldown: 1,
  async execute(client, message, args) { const t = args.join(" "); if (!t) return message.channel.send("❌ Texte ?"); await message.channel.send(encodeURIComponent(t).slice(0, 1900)); } };
