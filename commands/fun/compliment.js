const C = ["t'as un vrai charisme", "ton énergie est contagieuse", "tu es plus malin que tu ne le penses", "on rigole bien avec toi", "tu es fiable", "t'as du style"];
export default { name: "compliment", aliases: ["compli"], description: "Compliment", usage: "compliment [@user]", category: "fun", cooldown: 2,
  async execute(client, message) { const t = message.mentions.users.first() || message.author; await message.channel.send(`💐 **${t.username}**, ${C[Math.floor(Math.random() * C.length)]}.`); } };
