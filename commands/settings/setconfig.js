import fs from "fs";
import yaml from "js-yaml";
import { loadConfig } from "../../utils/functions.js";
export default { name: "setconfig", aliases: ["setcfg"], description: "Modifie une clé de config", usage: "setconfig <clé> <valeur>", category: "settings", cooldown: 2,
  async execute(client, message, args) { const [path, ...rest] = args; const val = rest.join(" "); if (!path || !val) return message.channel.send("❌ Usage : `setconfig debug_mode.enabled true`"); const c = loadConfig(true); const keys = path.split("."); let o = c; for (const k of keys.slice(0, -1)) { o[k] = o[k] || {}; o = o[k]; } o[keys.at(-1)] = val === "true" ? true : val === "false" ? false : isNaN(val) ? val : Number(val); fs.writeFileSync("config.yaml", yaml.dump(c)); await message.channel.send(`> ✅ \`${path}\` mis à jour`); } };
