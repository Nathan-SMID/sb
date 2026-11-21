const A = "abcdefghijklmnopqrstuvwxyz", B = "ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀsᴛᴜᴠᴡxʏᴢ";
export default { name: "smallcaps", aliases: ["scaps"], description: "Petites capitales", usage: "smallcaps <texte>", category: "text", cooldown: 1,
  async execute(client, message, args) { const t = args.join(" "); if (!t) return message.channel.send("❌ Texte ?"); await message.channel.send([...t.toLowerCase()].map((c) => { const i = A.indexOf(c); return i === -1 ? c : B[i]; }).join("").slice(0, 1900)); } };
