const Discord = require('discord.js');
const db = require('quick.db');
const fs = require('fs')

      
exports.run = async (client, message, args, member) => {
      if(message.channel.id != "699296334917664778") return message.channel.send("Lütfen komutlarınızı <#699296334917664778> kanalında kullanınız!").then(msg => msg.delete(3000));

  let kanalid = message.channel.id,
    guildID = message.guild.id,
    davetlkanal;
  
    if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor('RED')
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('Sadece herhangi bir sunucudan mesaj gönderebilirim.:relaxed: ')
    return message.author.sendEmbed(ozelmesajuyari); }
  
  const sayfa = [`**${message.guild.name} | Sunucu Ayarları**
\n**Sunucu prefixi :** !
\n**Küfür engeli:** ${db.fetch(`küfürE_${message.guild.id}`) ? `Açık ` : ` Kapalı ` }
\n**Otorol:** ${db.fetch(`autoRole_${message.guild.id}`) ? ` \`@${message.guild.roles.get(db.fetch(`autoRole_${message.guild.id}`)).name}\`` : ` Ayarlanmamış `}
\n**Otorol Kanalı:** ${db.fetch(`otorolKanal_${message.guild.id}`) ? ` \`${message.guild.channels.get(db.fetch(`otorolKanal_${message.guild.id}`)).name}\` ` : ` Ayarlanmamış `}
\n**Giriş Çıkış kanalı:** ${db.fetch(`hgbbkanal_${message.guild.id}`) ? ` ${client.channels.get(db.fetch(`hgbbkanal_${message.guild.id}`))} `  : `Ayarlanmamış `}
`] 
  
  const ayarReis = new Discord.RichEmbed()
  .setColor(0x36393E)
  .setDescription(sayfa)
  .setTimestamp()
  
  message.channel.send(ayarReis)
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['ayarlar'],
    permLevel: 2,
    kategori: "sunucu",
  };
  
  exports.help = {
    name: 'ayarlar',
    description: 'Sunucu ayarlarını gösterir.',
    usage: 'ayarlar',
  };  