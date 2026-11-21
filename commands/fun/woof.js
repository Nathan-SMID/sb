export default { name: "woof", aliases: ["wouf"], description: "Wouf", usage: "woof", category: "fun", cooldown: 1,
  async execute(client, message) { await message.channel.send(["wouf", "ouaf", "wouf wouf", "grrr"][Math.floor(Math.random() * 4)]); } };
