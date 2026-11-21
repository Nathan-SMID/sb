export default { name: "strike", aliases: ["barré"], description: "Texte barré", usage: "strike <texte>", category: "text", cooldown: 1,
  async execute(client, message, args) { const t = args.join(" "); if (!t) return message.channel.send("❌ Texte ?"); await message.channel.send([...t].map((c) => c + "\u0336").join("").slice(0, 1900)); } };
