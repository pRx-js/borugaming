const Discord = require('discord.js');

exports.run = function(client, message, args) {
  const m = args.join(' ');
  if(!m) return message.channel.send('**:gear: Bir miktar girmelisiniz!**');
  if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('**:x: Bu işlem için gerekli izne sahip değilsiniz!**');
  if(m < 1) return message.channel.send(':gear: **En az 1 mesaj silinebilir!**')
 if(m>100) return message.channel.send('**:gear: En fazla 100 mesaj silinebilir!**')
  message.delete();
  message.channel.bulkDelete(m);
  
  message.channel.send(`**${m}** tane mesaj silindi.`).then(msg => msg.delete(5000))
  };
   
exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['temizle','sil','clear'],
  permLevel: 2
};

exports.help = {
  name: 'sil',
  description: 'Belirlediğiniz miktarda mesaj siler',
  category:'yetkili',
  usage: 'sil 100' 
}