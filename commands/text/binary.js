export default { name: "binary", aliases: ["tobin"], description: "Convertit en binaire", usage: "binary <texte>", category: "text", cooldown: 1,
  async execute(client, message, args) { const t = args.join(" "); if (!t) return message.channel.send("❌ Texte ?"); await message.channel.send([...t].map((c) => c.charCodeAt(0).toString(2).padStart(8, "0")).join(" ").slice(0, 1900)); } };
