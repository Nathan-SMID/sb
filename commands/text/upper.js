export default { name: "upper", aliases: ["uc"], description: "Majuscules", usage: "upper <texte>", category: "text", cooldown: 1,
  async execute(client, message, args) { const t = args.join(" "); if (!t) return message.channel.send("❌ Texte ?"); await message.channel.send(t.toUpperCase().slice(0, 1900)); } };
