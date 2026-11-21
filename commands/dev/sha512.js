import crypto from "crypto";
export default { name: "sha512", description: "Hash SHA-512", usage: "sha512 <texte>", category: "dev", cooldown: 1, async execute(client, message, args) { const t = args.join(" "); if (!t) return message.channel.send("❌ Texte ?"); await message.channel.send("> `" + crypto.createHash("sha512").update(t).digest("hex") + "`"); } };
