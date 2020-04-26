const Discord = require('discord.js');

exports.run = (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply(`Bunu kullanma yetkin yok`)
    message.channel.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false
    })

    message.channel.send(`**:lock: <#${message.channel.id}> kilitlendi.**`)

};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['kanalkapat','kilitle','lock'],
    permLevel: 0
}

exports.help = {
    name: 'kanalkapat',
    description: 'Kanalı kapatır',
    usage: 'kanalkapat'
}