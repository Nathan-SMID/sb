export default { name: "piglatin", aliases: ["pl"], description: "Pig latin", usage: "piglatin <texte>", category: "text", cooldown: 1,
  async execute(client, message, args) { const t = args.join(" "); if (!t) return message.channel.send("❌ Texte ?"); await message.channel.send(t.replace(/\b([a-z])([a-z]*)\b/gi, (m, a, b) => b + a.toLowerCase() + "ay").slice(0, 1900)); } };
