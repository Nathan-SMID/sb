const A = ["Oui.", "Non.", "Peut-être.", "Demande plus tard.", "Certainement.", "Compte pas dessus.", "Les signes disent oui."];
export default { name: "magic", aliases: ["conch"], description: "Le coquillage magique répond", usage: "magic <question>", category: "fun", cooldown: 2,
  async execute(client, message, args) { if (!args.length) return message.channel.send("❌ Pose une question."); await message.channel.send(`🐚 **${args.join(" ")}**\n${A[Math.floor(Math.random() * A.length)]}`); } };
