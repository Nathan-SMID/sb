export default { name: "topic", aliases: ["sujet"], description: "Définit le sujet du salon", usage: "topic <texte>", category: "server", cooldown: 3,
  async execute(client, message, args) { await message.channel.setTopic(args.join(" ").slice(0, 1024)).then(() => message.channel.send("> ✅ sujet mis à jour")).catch((e) => message.channel.send("❌ " + e.message)); } };
