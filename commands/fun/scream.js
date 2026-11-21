export default { name: "scream", aliases: ["cri"], description: "Cri", usage: "scream [texte]", category: "fun", cooldown: 1,
  async execute(client, message, args) { await message.channel.send(`${(args.join(" ") || "AAAAH").toUpperCase()} !!!`); } };
