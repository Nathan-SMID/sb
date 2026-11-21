export default { name: "meow", aliases: ["miaou"], description: "Miaou", usage: "meow", category: "fun", cooldown: 1,
  async execute(client, message) { await message.channel.send(["miaou", "miaaaou", "mrrp", "mew"][Math.floor(Math.random() * 4)]); } };
