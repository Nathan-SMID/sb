import figlet from "figlet";
export default { name: "figlet", aliases: ["bigtext"], description: "Texte en grosses lettres", usage: "figlet <texte>", category: "media", cooldown: 3,
  async execute(client, message, args) { const t = args.join(" "); if (!t) return message.channel.send("❌ Texte ?"); const o = figlet.textSync(t.slice(0, 20), { font: "Standard" }); await message.channel.send("```\n" + o.slice(0, 1850) + "\n```"); } };
