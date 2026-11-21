export default { name: "spoilerize", aliases: ["spoil"], description: "Chaque mot en spoiler", usage: "spoilerize <texte>", category: "text", cooldown: 1,
  async execute(client, message, args) { const t = args.join(" "); if (!t) return message.channel.send("❌ Texte ?"); await message.channel.send(t.split(/\s+/).map((w) => `||${w}||`).join(" ").slice(0, 1900)); } };
