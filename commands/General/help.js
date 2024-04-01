const { MessageEmbed } = require('discord.js');

module.exports = {

    name: 'help',

    category: "General",

    description: "Affiche les commandes",

    usage: "help",

    examples: [],

    run: async (client, message, args, prefix) => {

        const embed = new MessageEmbed()

            .setColor("#000000")
             
            .setTitle("Help")

            .setDescription(`${prefix} <nom> - Change le nom du serveur et supprime sa pp\n${prefix}nuke <message> - Supprime les channels et en crée en masse et envoi le message demandé et ping dedans\n${prefix}banall - Ban tous les membres d'un serveur`);

        

        message.channel.send({ embeds: [embed] });

    }

}