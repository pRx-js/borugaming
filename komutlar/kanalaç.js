const Discord = require('discord.js');

exports.run = (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply(`Bunu kullanma yetkin yok`)
    message.channel.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: true
    })

    message.channel.send(`**:unlock: <#${message.channel.id}>'in kilidi kaldırıldı.**`)

};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['kanalaç','kilitaç','unlock'],
    permLevel: 0
}

exports.help = {
    name: 'kanalaç',
    description: 'Kanalı açar',
    usage: 'kanalaç'
}