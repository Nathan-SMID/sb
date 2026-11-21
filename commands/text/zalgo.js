const MARKS = ["\u0300", "\u0301", "\u0302", "\u0308", "\u0330", "\u0331"];
export default { name: "zalgo", aliases: ["cursed"], description: "Texte corrompu", usage: "zalgo <texte>", category: "text", cooldown: 1,
  async execute(client, message, args) { const t = args.join(" "); if (!t) return message.channel.send("❌ Texte ?"); await message.channel.send([...t].map((c) => c + MARKS[Math.floor(Math.random() * MARKS.length)] + MARKS[Math.floor(Math.random() * MARKS.length)]).join("").slice(0, 1900)); } };
