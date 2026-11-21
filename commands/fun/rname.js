const A = ["Kai", "Nox", "Lyra", "Zeph", "Mira", "Onyx", "Sora", "Vex"], B = ["Raven", "Blade", "Moon", "Storm", "Ash", "Echo", "Vale", "Frost"];
export default { name: "rname", aliases: ["pseudo"], description: "Pseudo aléatoire", usage: "rname", category: "fun", cooldown: 2,
  async execute(client, message) { await message.channel.send(`${A[Math.floor(Math.random() * A.length)]} ${B[Math.floor(Math.random() * B.length)]}`); } };
