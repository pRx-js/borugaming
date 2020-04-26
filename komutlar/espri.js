const { get } = require('snekfetch');
const Discord = require('discord.js');

exports.run = async (client, message) => {
  const espri = await get('https://api.emirkabal.com/espri').set('Authorization', '10-etlh7q0hflvv1870ynqvguwmr0smkjqpg-45my9cuw-59pt-w9p1u5-2enjl3');
  if (!espri || !espri.body || !espri.body.mesaj) return console.log("Bir hata oluştu.");
  message.channel.send(espri.body.mesaj)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['espiri','espriyap'],
  permLevel: 0
};

exports.help = {
  name: 'espri',
  description: 'Espri yapar.',
  usage: 'espri'
};