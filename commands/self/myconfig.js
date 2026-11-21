import { loadConfig } from "../../utils/functions.js";
export default { name: "myconfig", description: "Ta configuration actuelle", usage: "myconfig", category: "self", cooldown: 3, async execute(client, message) { await message.channel.send("```yaml\n" + JSON.stringify(loadConfig(), null, 2).slice(0, 1800) + "\n```"); } };
