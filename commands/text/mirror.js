export default { name: "mirror", aliases: ["rev"], description: "Inverse le texte", usage: "mirror <texte>", category: "text", cooldown: 1,
  async execute(client, message, args) { const t = args.join(" "); if (!t) return message.channel.send("❌ Texte ?"); await message.channel.send([...t].reverse().join("").slice(0, 1900)); } };
