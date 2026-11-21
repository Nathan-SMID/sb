import yaml from "js-yaml";
export default { name: "yaml2json", description: "YAML vers JSON", usage: "yaml2json <yaml>", category: "dev", cooldown: 1, async execute(client, message, args) { try { await message.channel.send("```json\n" + JSON.stringify(yaml.load(args.join(" ")), null, 2).slice(0, 1800) + "\n```"); } catch { await message.channel.send("❌ YAML invalide."); } } };
