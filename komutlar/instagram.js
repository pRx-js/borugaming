const Discord = require('discord.js')
const instagram = require("user-instagram")
 
exports.run = (client, message, args) => {
      if(message.channel.id != "699296334917664778") return message.channel.send("Lütfen komutlarınızı <#699296334917664778> kanalında kullanınız!").then(msg => msg.delete(3000));
    let kullanici = args.join(' ');
    if(!kullanici) return message.reply(`Bir kullanıcı adı girmedin`)

instagram('https://www.instagram.com/' + kullanici)
.then(data => {

  const biocuk = (data.bio.length === 0 ? 'Yok' : data.bio)  
  const isimcik = (data.fullName.length === 0 ? 'Yok' : data.fullName)

  var gizlimi;
  var onaylimi;

  if (data.isPrivate === false) gizlimi = "Açık"
  if (data.isPrivate === true) gizlimi = "Gizli"
  if (data.isVerified === false) onaylimi = "Onaylı Değil"
  if (data.isVerified === true) onaylimi = "Onaylı"

    const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setAuthor(`${kullanici} Instagram Bilgileri`)
    .setThumbnail(`${data.avatarHD}`)
    .addField('Tam İsim', isimcik)
    .addField('Takipçi Sayısı', `${data.subscriberCount}`)
    .addField('Takip Ettiği Hesap Sayısı', `${data.subscribtions}`)
    .addField('Gönderi Sayısı', `${data.postCount}`)
    .addField('Biografisi', biocuk)
    .addField('ID', `${data.id}`)
    .addField('Profil Gizliliği', `${gizlimi}`)
    .addField('Profil Onaylılığı', `${onaylimi}`)
    .addField('Hesabın Linki', `${data.profileLink}`)
    .setTimestamp()
    .setFooter(`${message.author.tag} tarafından istendi.`, message.author.avatarURL)
    
  message.channel.send(embed)
}) 
}

exports.conf = {
    enabled: true, 
    guildOnly: true, 
    aliases: ['insta','instagram'],
    permLevel: 0 
  };
  
  exports.help = {
    name: 'instagram', 
    description: 'Belirlenen instagram hesabı hakkında bilgi verir.',
    usage: 'instagram <hesap ismi>'
  };