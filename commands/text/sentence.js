export default { name: "sentence", aliases: ["sc"], description: "Phrase normale", usage: "sentence <texte>", category: "text", cooldown: 1,
  async execute(client, message, args) { const t = args.join(" ").toLowerCase(); if (!t) return message.channel.send("❌ Texte ?"); await message.channel.send((t[0].toUpperCase() + t.slice(1)).slice(0, 1900)); } };
