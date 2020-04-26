const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
  
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  
  if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`:fire: Yeterli yetki, bulunmamakta!`)
  
  let capslock = await db.fetch(`capslock_${message.guild.id}`)
  if (capslock) {
    db.delete(`capslock_${message.guild.id}`)
    message.channel.send(`**:fire: Capslock engelleme sistemi, kapatıldı!**`).then(message => message.delete(5000));
  }
 
  if (!capslock) {
    db.set(`capslock_${message.guild.id}`, 'acik')
    message.channel.send(`**:fire: Capslock engelleme sistemi, aktif!**`).then(message => message.delete(5000));
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['capslock',"capsengel"],
  permLevel: 2
};

exports.help = {
  name: 'capslock',
  category: 'Moderasyon komutları!',
  description: 'Capslock kullanımını engeller.',
  usage: 'capslock-engelleme'
};