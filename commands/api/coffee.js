import axios from "axios";
export default { name: "coffee", description: "Photo de café", usage: "coffee", category: "api", cooldown: 3, async execute(client, message) { await message.channel.send(`https://coffee.alexflipnote.dev/${Math.random().toString(36).slice(2, 8)}.jpg`); } };
