import { formatTime } from "../../utils/functions.js";
export default { name: "elapsed", description: "Temps écoulé depuis une date", usage: "elapsed <date>", category: "util", cooldown: 3, async execute(client, message, args) { const d = new Date(args[0]); if (isNaN(d)) return message.channel.send("❌ Date invalide."); await message.channel.send(`> ⏱️ ${formatTime(Date.now() - d)}`); } };
