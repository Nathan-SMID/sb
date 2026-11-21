const O = ["Les astres sont favorables.", "Attends la nouvelle lune.", "Quelqu'un te doit une faveur.", "Trois jours de patience.", "Le doute est ton seul ennemi.", "Une porte se ferme, une autre s'ouvre.", "Ne signe rien cette semaine."];
export default { name: "oracle", aliases: ["prophetie"], description: "Prophétie aléatoire", usage: "oracle", category: "fun", cooldown: 2,
  async execute(client, message) { await message.channel.send(`🔮 ${O[Math.floor(Math.random() * O.length)]}`); } };
