const M = { "mon": "me", "le": "l'", "oui": "ouais", "ami": "moussaillon", "argent": "doublons", "bateau": "navire", "bonjour": "hissa" };
export default { name: "pirate", aliases: ["corsaire"], description: "Parle comme un pirate", usage: "pirate <texte>", category: "fun", cooldown: 1,
  async execute(client, message, args) { const t = args.join(" "); if (!t) return message.channel.send("❌ Texte ?"); await message.channel.send(t.replace(/\b\w+\b/g, (w) => M[w.toLowerCase()] || w) + ", moussaillon !"); } };
