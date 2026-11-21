import crypto from "crypto";
export default { name: "uuid", aliases: ["guid"], description: "UUID v4", usage: "uuid [n]", category: "general", cooldown: 1,
  async execute(client, message, args) { const n = Math.min(parseInt(args[0], 10) || 1, 10); await message.channel.send(Array.from({ length: n }, () => `\`${crypto.randomUUID()}\``).join("\n")); } };
