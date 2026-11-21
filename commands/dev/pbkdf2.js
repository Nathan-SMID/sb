import crypto from "crypto";
export default { name: "pbkdf2", description: "Dérivation PBKDF2", usage: "pbkdf2 <texte> [itérations]", category: "dev", cooldown: 2, async execute(client, message, args) { const t = args.join(" "); if (!t) return message.channel.send("❌ Texte ?"); await message.channel.send("> `" + crypto.pbkdf2Sync(t, "sel", 10000, 32, "sha256").toString("hex") + "`"); } };
