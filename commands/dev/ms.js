export default { name: "ms", description: "Timestamp en millisecondes", usage: "ms", category: "dev", cooldown: 1, async execute(client, message) { await message.channel.send("> " + Date.now()); } };
