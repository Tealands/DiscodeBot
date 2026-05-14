export const data = {
  name: "ping",
  description: "Ping the bot to check latency.",
};

export async function execute(message, args) {
  const sent = await message.reply("Pinging...");
  await sent.edit(`Pong! 🏓 (RTT: ${sent.createdTimestamp - message.createdTimestamp}ms)`);
}
