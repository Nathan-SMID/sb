const T = ["Aux gens qui codent à 3h du matin.", "À la wifi stable.", "Aux serveurs qui tiennent debout.", "Aux backups qui existent.", "À ceux qui lisent la doc."];
export default { name: "toast", aliases: ["trinque"], description: "Porte un toast", usage: "toast", category: "fun", cooldown: 2,
  async execute(client, message) { await message.channel.send(`🥂 ${T[Math.floor(Math.random() * T.length)]}`); } };
