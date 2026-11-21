export default { name: "yesno", aliases: ["yn"], description: "Oui ou non", usage: "yesno", category: "fun", cooldown: 1,
  async execute(client, message) { await message.channel.send(["✅ oui", "❌ non", "🤷 peut-être"][Math.floor(Math.random() * 3)]); } };
