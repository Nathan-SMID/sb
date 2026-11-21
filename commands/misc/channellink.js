export default { name: "channellink", aliases: ["cl"], description: "Lien vers un salon", usage: "channellink [#salon]", category: "misc", cooldown: 1,
  async execute(client, message) { const c = message.mentions.channels.first() || message.channel; await message.channel.send(`> 🔗 https://discord.com/channels/${message.guild?.id || "@me"}/${c.id}`); } };
