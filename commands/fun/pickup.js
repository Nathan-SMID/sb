const P = ["Tu dois être un bug, parce que t'as planté mon cœur.", "T'as un nom ? Ou je peux t'appeler mien ?", "Tu crois au coup de foudre ou je dois repasser ?", "T'es pas un peu beaucoup mon type ?"];
export default { name: "pickup", aliases: ["drague"], description: "Phrase de drague", usage: "pickup", category: "fun", cooldown: 2,
  async execute(client, message) { await message.channel.send(`😏 ${P[Math.floor(Math.random() * P.length)]}`); } };
