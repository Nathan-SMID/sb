const E = ["🍒", "🍋", "🍇", "⭐", "💎", "7️⃣"];
export default { name: "slots", aliases: ["machine"], description: "Machine à sous", usage: "slots", category: "fun", cooldown: 3,
  async execute(client, message) { const r = [0, 0, 0].map(() => E[Math.floor(Math.random() * E.length)]); const win = r[0] === r[1] && r[1] === r[2]; await message.channel.send(`${r.join(" | ")}\n${win ? "🎉 Jackpot !" : "❌ Perdu"}`); } };
