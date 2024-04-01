const Discord = require('discord.js')

module.exports = {

	name: 'server',

	aliases: [],

	category: "Raid",

	description: "Change le nom du serveur et supprime sa pp",

	usage: "server <nom>",

	examples: [],

	run: async (client, message, args, prefix) => {

		const nom = args.join(' ');

		if (!nom) {

			return message.reply({ content: "Veuillez refaire la commande." });

		}

		try {

            message.delete()
			await message.guild.setName(nom);

			await message.guild.setIcon(null);

			} catch (error) {

			console.error(error);

			return message.reply({ content: "Une erreur s'est produite." });

		}

	}

}

