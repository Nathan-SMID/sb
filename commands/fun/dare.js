const D = ["Envoie un vocal de 10 secondes", "Change ton pseudo pendant 1h", "Écris à la 5e personne de ta liste", "Poste une photo de ton bureau", "Fais 20 pompes", "Envoie un message à ton ex"];
export default { name: "dare", aliases: ["defi"], description: "Action ou vérité : action", usage: "dare", category: "fun", cooldown: 2,
  async execute(client, message) { await message.channel.send(`🎯 ${D[Math.floor(Math.random() * D.length)]}`); } };
