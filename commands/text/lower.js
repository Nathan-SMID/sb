export default { name: "lower", aliases: ["lc"], description: "Minuscules", usage: "lower <texte>", category: "text", cooldown: 1,
  async execute(client, message, args) { const t = args.join(" "); if (!t) return message.channel.send("❌ Texte ?"); await message.channel.send(t.toLowerCase().slice(0, 1900)); } };
