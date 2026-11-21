export default { name: "unbinary", aliases: ["frombin"], description: "Décode le binaire", usage: "unbinary <binaire>", category: "text", cooldown: 1,
  async execute(client, message, args) { const t = args.join(" "); if (!t) return message.channel.send("❌ Binaire ?"); await message.channel.send(t.split(/\s+/).map((b) => String.fromCharCode(parseInt(b, 2) || 63)).join("").slice(0, 1900)); } };
