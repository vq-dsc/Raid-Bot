module.exports = {
	name: 'ping',
	aliases: [],
	category: "General",
	description: "Répond avec pong!",
	usage: "ping",
	examples: [],
	run: async (client, message, args, prefix) => {
       		return message.reply({ content: `🏓 Pong! ${client.ws.ping} ms` });
	}
}
