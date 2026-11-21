const V = ["vibe impeccable", "vibe douteuse", "vibe cosmique", "vibe reposante", "vibe chaotique", "vibe premium"];
export default { name: "vibe", aliases: ["vibecheck"], description: "Vibe check", usage: "vibe [@user]", category: "fun", cooldown: 2,
  async execute(client, message) { const t = message.mentions.users.first() || message.author; await message.channel.send(`✨ **${t.username}** → ${V[Math.floor(Math.random() * V.length)]}`); } };
