const M = { a: "4", e: "3", i: "1", o: "0", s: "5", t: "7", b: "8", g: "6" };
export default { name: "leet", aliases: ["1337"], description: "Transforme en leet speak", usage: "leet <texte>", category: "text", cooldown: 1,
  async execute(client, message, args) { const t = args.join(" "); if (!t) return message.channel.send("❌ Texte ?"); await message.channel.send([...t.toLowerCase()].map((c) => M[c] || c).join("").slice(0, 1900)); } };
