export default { name: "laugh", aliases: ["rire"], description: "Rire", usage: "laugh", category: "fun", cooldown: 1,
  async execute(client, message) { await message.channel.send(["ahahah", "mdrrr", "hahaha", "ptdrrr", "ahah"][Math.floor(Math.random() * 5)]); } };
