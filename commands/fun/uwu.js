export default { name: "uwu", aliases: ["uwuify"], description: "Texte en uwu", usage: "uwu <texte>", category: "fun", cooldown: 1,
  async execute(client, message, args) { const t = args.join(" "); if (!t) return message.channel.send("❌ Texte ?"); await message.channel.send(t.replace(/[rl]/g, "w").replace(/[RL]/g, "W").replace(/n([aeiou])/g, "ny$1") + " uwu"); } };
