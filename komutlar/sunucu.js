
const Discord = require('discord.js');
const dateFormat = require('dateformat');

exports.run = function(client, message, args) {
if(message.channel.id != "699296334917664778") return message.channel.send("Lütfen komutlarınızı <#699296334917664778> kanalında kullanınız!").then(msg => msg.delete(3000));
if(!message.channel.guild) return message.reply(' ');
const millis = new Date().getTime() - message.guild.createdAt.getTime();
const now = new Date();
dateFormat(now, 'dddd, mmmm dS, yyyy, h:MM:ss TT');
const verificationLevels = ['Yok', 'Düşük', 'Orta', 'Delicene', 'Aşırı'];
const days = millis / 1000 / 60 / 60 / 24;
let roles = client.guilds.get(message.guild.id).roles.map(r => r.name);
var embed  = new Discord.RichEmbed()
.setAuthor(message.guild.name, message.guild.iconURL)
.addField("**🆔 Sunucu ID'si: **", message.guild.id,true)
.addField("**📅 Oluşturulduğu zaman **", message.guild.createdAt.toLocaleString(),true)
.addField("**👑 Sahibi **",`<@${message.guild.owner.user.id}>`,true)
.addField(`**👥 Üyeler [${message.guild.memberCount}] **`,`**${message.guild.members.filter(m => m.presence.status != "offline" && !m.user.bot).size}** Aktif`,true)
.addField(`**💬 Kanallar [${message.guild.channels.size}]**`,`**${message.guild.channels.filter(m => m.type === 'text').size}**` + ' Yazı | '+ `**${message.guild.channels.filter(m => m.type === 'voice').size}** Ses `,true)
.addField("**🌍 Diğer **" , `**Bölge:** ${message.guild.region}\n**Doğrulama seviyesi:** ${message.guild.verificationLevel}`,true)
.addField(`**🔐 Roller [${message.guild.roles.size}]**`,`Tüm rolleri görmek için **!roller** yazın.`,true)
.setColor('#000000')
message.channel.send(embed)
  };
   
exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['sunucu','discord','scbilgi','server'],
  permLevel: 0
};

exports.help = {
  name: 'sunucu',
  description: 'Belirlediğiniz miktarda mesaj siler',
  category:'yetkili',
  usage: 'sil 100' 
}