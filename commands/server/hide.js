export default { name: "hide", aliases: ["cache"], description: "Cache le salon pour @everyone", usage: "hide", category: "server", cooldown: 3,
  async execute(client, message) { await message.channel.permissionOverwrites.edit(message.guild.roles.everyone, { ViewChannel: false }).then(() => message.channel.send("> 🙈 salon masqué")).catch((e) => message.channel.send("❌ " + e.message)); } };
