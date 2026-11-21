export default { name: "pic", aliases: ["photo"], description: "Image aléatoire", usage: "pic", category: "media", cooldown: 2,
  async execute(client, message) { await message.channel.send(`https://picsum.photos/seed/${Math.random().toString(36).slice(2, 8)}/900/600`); } };
