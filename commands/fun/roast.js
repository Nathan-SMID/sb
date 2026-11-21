const R = ["tu codes comme tu marches : lentement", "t'es la preuve que le hasard existe", "ta config coûte plus cher que ton cerveau", "t'as le charisme d'un écran de veille", "même ton wifi te lâche", "t'es pas bête, t'es juste en veille"];
export default { name: "roast", aliases: ["taunt"], description: "Taquinerie", usage: "roast [@user]", category: "fun", cooldown: 2,
  async execute(client, message) { const t = message.mentions.users.first() || message.author; await message.channel.send(`🔥 **${t.username}** : ${R[Math.floor(Math.random() * R.length)]}.`); } };
