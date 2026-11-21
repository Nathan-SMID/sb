import fs from "fs";
import yaml from "js-yaml";
import { loadConfig } from "../../utils/functions.js";
export default { name: "debug", aliases: ["dbg"], description: "Active/désactive le mode debug", usage: "debug", category: "settings", cooldown: 2,
  async execute(client, message) { const c = loadConfig(true); c.debug_mode = c.debug_mode || {}; c.debug_mode.enabled = !c.debug_mode.enabled; fs.writeFileSync("config.yaml", yaml.dump(c)); await message.channel.send(`> debug : ${c.debug_mode.enabled}`); } };
