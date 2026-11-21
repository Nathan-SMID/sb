export default { name: "mytag", description: "Ton tag", usage: "mytag", category: "self", cooldown: 1, async execute(client, message) { await message.channel.send("> " + client.user.tag); } };
