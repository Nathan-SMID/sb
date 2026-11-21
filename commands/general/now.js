export default { name: "now", aliases: ["datetime"], description: "Date et heure actuelles", usage: "now", category: "general", cooldown: 1,
  async execute(client, message) { const d = new Date(); await message.channel.send(`> ${d.toUTCString()}\n> unix : ${Math.floor(d / 1000)}`); } };
