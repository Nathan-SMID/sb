import fs from "fs";
import yaml from "js-yaml";
import { loadConfig } from "../../utils/functions.js";
export default { name: "nsfwtoggle", aliases: ["nsfwt"], description: "Active/désactive les commandes NSFW", usage: "nsfwtoggle", category: "settings", cooldown: 2,
  async execute(client, message) { const c = loadConfig(true); c.nsfw = c.nsfw || {}; c.nsfw.enabled = !c.nsfw.enabled; fs.writeFileSync("config.yaml", yaml.dump(c)); await message.channel.send(`> NSFW : ${c.nsfw.enabled}`); } };
