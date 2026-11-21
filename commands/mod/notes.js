import fs from "fs";
const F = "data/moddata.json";
export default { name: "notes", description: "Notes sur un membre", usage: "notes @user", category: "mod", cooldown: 3, async execute(client, message) { const u = message.mentions.users.first(); if (!u) return message.channel.send("❌ Mentionne quelqu'un."); const d = JSON.parse(fs.existsSync(F) ? fs.readFileSync(F, "utf8") : "{}"); const l = d.notes?.[u.id] || []; await message.channel.send(l.length ? l.map((n) => `> ${n.d} — ${n.t}`).join("\n") : "> aucune note"); } };
