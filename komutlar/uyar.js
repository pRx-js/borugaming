const Discord = require("discord.js")
const db = require("quick.db")

exports.run = async(client, message, args) => {
  
  const yetkiyok = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor(`Bu Komutu Kullanmak İçin Yeterli İzine Sahip Değilsin`, message.author.avatarURL)
  
  if (!message.member.hasPermission ("MANAGE_MESSAGES"))
    return message.channel.send(`Bu Komutu Kullanmak İçin Yeterli İzine Sahip Değilsin`)
  
  var sebep = args.slice(1).join(" ") || "Belirtilmemiş"
  
  
  var kisi = message.mentions.users.first()
  
  if (!kisi)
    return message.channel.send(`**Lütfen uyaracağınız kişiyi etiketleyin.**`)
  
  let uyarı = await db.add(`uyarı.${kisi.id+message.guild.id}`, 1)

  
  message.channel.send(`**<@${kisi.id}> adlı kişi başarıyla uyarıldı.**`)
  
  let modlogkanal = message.guild.channels.find(channel => channel.name === "mod-log")
  
  if (!modlogkanal) return;
  
  const sbb = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle("Kullanıcı Sunucuda Uyarıldı!")
  .addField(`Uyarılan Kişi`, `${kisi}`)
  .addField(`Uyaran Kişi`, `${message.author}`)
  .addField(`Sebep`, `${sebep}`)
  .setTimestamp()

  message.guild.channels.get(modlogkanal.id).send(sbb)
  
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["uyar", "warn", "uyarı"],
  perm: 0
}

exports.help = {
  name: "uyar",
  description: "Kişiyi Uyarır",
  usage: "/uyar @Kişi Sebep"
}