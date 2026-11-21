const A = "abcdefghijklmnopqrstuvwxyz", B = "ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ";
export default { name: "bubble", aliases: ["circled"], description: "Lettres cerclées", usage: "bubble <texte>", category: "text", cooldown: 1,
  async execute(client, message, args) { const t = args.join(" "); if (!t) return message.channel.send("❌ Texte ?"); await message.channel.send([...t.toLowerCase()].map((c) => { const i = A.indexOf(c); return i === -1 ? c : B[i]; }).join("").slice(0, 1900)); } };
