const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
    let üyesayi = message.guild.memberCount;
    let botlar = message.guild.members.filter(m => m.user.bot).size;
    let kullanıcılar = üyesayi - botlar;
    let ses = message.guild.members.filter(m => m.voiceChannel).size;
const embed = new Discord.RichEmbed()
.setColor(`RANDOM`)
.setTimestamp()
.addField(`Toplam Üye`, `**${üyesayi}**`, true)
.addField(`Kullanıcılar`, `**${kullanıcılar}**`, true)
.addField(`Sesli Kanallardaki Üyeler`, `**${ses}**`,true)
.addField(`Botlar`, `**${botlar}**`, true)
.addField(`Üye Durumları`, `**${message.guild.members.filter(o => o.presence.status === 'online').size}** Çevrimiçi\n**${message.guild.members.filter(i => i.presence.status === 'idle').size}** Boşta\n**${message.guild.members.filter(dnd => dnd.presence.status === 'dnd').size}** Rahatsız Etmeyin\n**${message.guild.members.filter(off => off.presence.status === 'offline').size}** Çevrimdışı/Görünmez`, true)
message.channel.send(embed)
}
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["üye","üyeler","üyedurum"],
  permLevel: 0
};

module.exports.help = {
  name: 'üye',
  description: 'Üye Durumlarını ve sunucudaki üye sayısını gösterir',
  usage: 'üyedurum'
};