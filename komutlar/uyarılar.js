const Discord = require("discord.js")
const db = require("quick.db")

exports.run = async(client, message, args) => {
      if(message.channel.id != "699296334917664778") return message.channel.send("Lütfen komutlarınızı <#699296334917664778> kanalında kullanınız!").then(msg => msg.delete(3000));
  
  
  const kisiyok = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor(`Bir Kişiyi Etiketlemelisin`, message.author.avatarURL)
  
  var kisi = message.mentions.users.first()
  
  if (!kisi)
    return message.channel.send(`**Bir Kişiyi Etiketlemelisin**`)
  
  const yok = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor(`Bu Kullanıcının Hiç Uyarısı Yok`, kisi.avatarURL)
  
  let uyarisi = await db.get(`uyarı.${kisi.id+message.guild.id}`)
  if (!uyarisi || uyarisi == 0) return message.channel.send(`**Bu Kullanıcının Hiç Uyarısı Yok**`)
        let uyarisayiyolla = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription(`**${kisi.username} Adlı Kullanıcının Toplam Uyarısı : **` + db.get(`uyarı.${kisi.id+message.guild.id}`) || '0', true)
       

message.channel.send(uyarisayiyolla)
  
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["uyarılar", "infractions", "uyarı-bak"],
  perm: 0
}

exports.help = {
  name: "uyarılar",
  description: "Kişinin Varsa Uyarılarını Gösterir",
  usage: "/uyarılar @Kişi"
}