export default { name: "show", aliases: ["affiche"], description: "Rend le salon visible", usage: "show", category: "server", cooldown: 3,
  async execute(client, message) { await message.channel.permissionOverwrites.edit(message.guild.roles.everyone, { ViewChannel: true }).then(() => message.channel.send("> 👁️ salon visible")).catch((e) => message.channel.send("❌ " + e.message)); } };
