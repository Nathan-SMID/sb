export default { name: "unlock", aliases: ["deverrouille"], description: "Déverrouille le salon", usage: "unlock", category: "server", cooldown: 3,
  async execute(client, message) { await message.channel.permissionOverwrites.edit(message.guild.roles.everyone, { SendMessages: true }).then(() => message.channel.send("> 🔓 déverrouillé")).catch((e) => message.channel.send("❌ " + e.message)); } };
