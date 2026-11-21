const T = ["Ton pire souvenir de honte ?", "Le dernier mensonge que tu as dit ?", "Un secret que personne ne connaît ?", "Ta plus grosse erreur d'achat ?", "Qui stalkes-tu le plus ?", "La chose la plus gênante dans ton historique ?"];
export default { name: "truth", aliases: ["verite"], description: "Action ou vérité : vérité", usage: "truth", category: "fun", cooldown: 2,
  async execute(client, message) { await message.channel.send(`🗣️ ${T[Math.floor(Math.random() * T.length)]}`); } };
