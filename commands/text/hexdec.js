export default { name: "hexdec", aliases: ["fromhex"], description: "Décode l'hexadécimal", usage: "hexdec <hex>", category: "text", cooldown: 1,
  async execute(client, message, args) { const t = args.join(" ").replace(/\s/g, ""); if (!t) return message.channel.send("❌ Hex ?"); await message.channel.send(Buffer.from(t, "hex").toString().slice(0, 1900)); } };
