import fs from "fs";
import yaml from "js-yaml";
import { loadConfig } from "../../utils/functions.js";
export default { name: "pfx", aliases: ["setprefix"], description: "Change le préfixe", usage: "pfx <préfixe>", category: "settings", cooldown: 2,
  async execute(client, message, args) { const p = args[0]; if (!p) return message.channel.send(`> préfixe actuel : \`${client.prefix}\``); const c = loadConfig(true); c.selfbot = c.selfbot || {}; c.selfbot.prefix = p; fs.writeFileSync("config.yaml", yaml.dump(c)); client.prefix = p; await message.channel.send(`> ✅ préfixe : \`${p}\``); } };
