import { loadConfig } from "../../utils/functions.js";
export default { name: "config", aliases: ["cfg"], description: "Affiche la config", usage: "config [clé]", category: "settings", cooldown: 3,
  async execute(client, message, args) { const c = loadConfig(); if (!args.length) return message.channel.send("```yaml\n" + JSON.stringify(c, null, 2).slice(0, 1800) + "\n```"); const v = args[0].split(".").reduce((o, k) => o?.[k], c); await message.channel.send(`> \`${args[0]}\` = ${JSON.stringify(v)}`); } };
