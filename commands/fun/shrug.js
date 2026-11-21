export default { name: "shrug", aliases: ["hap"], description: "Haussement d'épaules", usage: "shrug", category: "fun", cooldown: 1,
  async execute(client, message) { await message.channel.send("¯\\_(ツ)_/¯"); } };
