import os from "os";
export default { name: "loadavg", description: "Charge système", usage: "loadavg", category: "self", cooldown: 3, async execute(client, message) { await message.channel.send("> " + os.loadavg().map((x) => x.toFixed(2)).join(" / ")); } };
