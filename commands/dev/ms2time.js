import { formatTime } from "../../utils/functions.js";
export default { name: "ms2time", description: "Millisecondes en durée lisible", usage: "ms2time <ms>", category: "dev", cooldown: 1, async execute(client, message, args) { const n = parseInt(args[0], 10); if (isNaN(n)) return message.channel.send("❌ Nombre ?"); await message.channel.send("> " + formatTime(n)); } };
