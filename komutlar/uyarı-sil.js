const Discord = require("discord.js")
const db = require("quick.db")

exports.run = async(client, message, args) => {
      if(message.channel.id != "699296334917664778") return message.channel.send("Lütfen komutlarınızı <#699296334917664778> kanalında kullanınız!").then(msg => msg.delete(3000));
  
  const yetkiyok = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor(`Bu Komutu Kullanmak İçin Yeterli İzine Sahip Değilsin`, message.author.avatarURL)
  
  if (!message.member.hasPermission ("MANAGE_MESSAGES"))
    return message.channel.send(yetkiyok)
  
const kisiyok = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor(`Bir Kişiyi Etiketlemelisin`, message.author.avatarURL)
  
  var kisi = message.mentions.users.first()
  
  if (!kisi)
    return message.channel.send(`**Lütfen bir kişiyi etiketleyin.**`)
  
  const uyarisiyok = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor(`Bu Kullanıcının Hiç Uyarısı Yok`, kisi.avatarURL)
  
  const tamamdir = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor(`Başarıyla Kullanıcının Uyarısı Silindi`, kisi.avatarURL)
  
  let tm = await db.get(`uyarı.${kisi.id+message.guild.id}`)
  if (!tm || tm == 0) return message.channel.send(`**Bu Kullanıcının Hiç Uyarısı Yok.**`)
  
  await db.add(`uyarı.${kisi.id+message.guild.id}`, -1)
  message.channel.send(`**${kisi.username} adlı kullanıcının uyarısı silindi.**`)
  
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["uyarı-sil","uyarısil"],
  perm: 0
}

exports.help = {
  name: "uyarı-sil",
  description: "Kişinin İstediğiniz Kadar Uyarısını Siler",
  usage: "/uyarı-sil @Kişi Miktar"
}