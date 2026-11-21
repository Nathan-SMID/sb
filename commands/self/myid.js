export default { name: "myid", description: "Ton ID", usage: "myid", category: "self", cooldown: 1, async execute(client, message) { await message.channel.send("> `" + client.user.id + "`"); } };
