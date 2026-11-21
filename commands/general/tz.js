export default { name: "tz", aliases: ["timezone"], description: "Fuseau horaire local", usage: "tz", category: "general", cooldown: 2,
  async execute(client, message) { await message.channel.send(`> ${Intl.DateTimeFormat().resolvedOptions().timeZone}\n> ${new Date().toString()}`); } };
