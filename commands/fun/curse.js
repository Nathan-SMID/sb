const C = ["bordel de merde", "putain de nom de dieu", "nom d'une pipe", "sacré nom de nom", "crotte de bique", "bon sang de bonsoir"];
export default { name: "curse", aliases: ["jure"], description: "Juron aléatoire", usage: "curse", category: "fun", cooldown: 2,
  async execute(client, message) { await message.channel.send(`🤬 ${C[Math.floor(Math.random() * C.length)]}`); } };
