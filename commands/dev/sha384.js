import crypto from "crypto";
export default { name: "sha384", description: "Hash SHA-384", usage: "sha384 <texte>", category: "dev", cooldown: 1, async execute(client, message, args) { const t = args.join(" "); if (!t) return message.channel.send("❌ Texte ?"); await message.channel.send("> `" + crypto.createHash("sha384").update(t).digest("hex") + "`"); } };
