export default { name: "ss", aliases: ["screenshot"], description: "Capture d'écran d'un site", usage: "ss <url>", category: "media", cooldown: 5,
  async execute(client, message, args) { if (!args[0]) return message.channel.send("❌ URL ?"); const u = args[0].startsWith("http") ? args[0] : "https://" + args[0]; await message.channel.send(`https://image.thum.io/get/width/1200/${u}`); } };
