import fs from "fs";
const F = "data/moddata.json";
export default { name: "warns", description: "Avertissements d'un membre", usage: "warns [@user]", category: "mod", cooldown: 3, async execute(client, message) { const u = message.mentions.users.first() || message.author; const d = JSON.parse(fs.existsSync(F) ? fs.readFileSync(F, "utf8") : "{}"); const l = d.warns?.[u.id] || []; await message.channel.send(l.length ? l.map((w, i) => `> ${i + 1}. ${w.r} (${w.t})`).join("\n") : "> aucun avertissement"); } };
