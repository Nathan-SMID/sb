const E = ["mon réveil a menti", "mon chat a marché sur le clavier", "Discord a freezé", "j'avais plus de batterie", "le wifi du voisin est tombé"];
export default { name: "excuse", aliases: ["pardon"], description: "Excuse toute faite", usage: "excuse", category: "fun", cooldown: 2,
  async execute(client, message) { await message.channel.send(`🙃 Désolé, ${E[Math.floor(Math.random() * E.length)]}.`); } };
