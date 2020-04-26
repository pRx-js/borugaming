const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Yapımcım: <@385001389119504384>');
    message.channel.sendEmbed(ozelmesajkontrol) }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yapımcım', 'yapımcı','sahip'],
  permLevel: 0
};

exports.help = {
  name: 'yapımcı',
  description: 'Yapimcimi Gosterir.',
  usage: 'yapımcı'
};