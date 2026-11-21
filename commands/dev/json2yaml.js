import yaml from "js-yaml";
export default { name: "json2yaml", description: "JSON vers YAML", usage: "json2yaml <json>", category: "dev", cooldown: 1, async execute(client, message, args) { try { await message.channel.send("```yaml\n" + yaml.dump(JSON.parse(args.join(" "))).slice(0, 1800) + "\n```"); } catch { await message.channel.send("❌ JSON invalide."); } } };
