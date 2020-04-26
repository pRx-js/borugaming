const Discord = require("discord.js");
const db = require('quick.db');
exports.run = (client, message, args) => {
if(message.channel.id != "702159058127552572") return message.channel.send("Lütfen Bu Komutu <#702159058127552572> Kanalında Kullanınız!").then(msg => msg.delete(3000));
  const kayitsiz = message.guild.roles.find(r => r.id === "702158487181983744");
  const kayıtlı = message.guild.roles.find(r => r.id === "699277253561024552"); //buraya erkek rolünüzün id'sini koyun
  const log = message.guild.channels.find(c => c.id === "701665058660548628"); //buraya kayıt log id koyun
  if(!message.member.roles.array().filter(r => r.id === "702159566514815088")[0]) { 
    return message.channel.send("**Kayıt etmek için <@&702159566514815088> rolüne sahip olmalısın.**");
  } else {
    let member = message.mentions.users.first() || message.guild.members.get(args[0]);
      if(!member) return message.channel.send("**Bir kullanıcı belirtin.**")
    const c = message.guild.member(member)
    const nick = args[1];
    const isim = args[2];
    const yas = args[3];
    if(!nick) return message.channel.send("**Nick girilmedi.**")
      if(!isim) return message.channel.send("**İsim girilmedi.**")
      if(!yas) return message.channel.send("**Yaş girilmedi.**")
    c.removeRole(kayitsiz)
    c.addRole(kayıtlı)
    c.setNickname(`${nick} | ${isim} | ${yas}`)
    message.channel.send(`<a:tick:702256895486066718> Kullanıcı Kaydı Başarıyla Gerçekleştirildi!`).then(msg => msg.delete(5000));
    const embed = new Discord.RichEmbed()
    .setAuthor("Yeni Kullanıcı Kaydı Yapıldı!")
    .addField(`Kayıt edilen kişi`, `${c.user.tag}`)
    .addField(`Kayıt eden yetkili`, `${message.author.tag}`)
    .addField(`Yeni bilgiler`, `${nick} | ${isim} | ${yas}`)
    .setFooter("Kayıt Başarıyla Gerçekleştirildi")
    .setColor("RANDOM")
    log.send(embed)
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kayıt'],
  permLevel: 0
};
exports.help = {
  name: "kayıt",
  description: "",
  usage: ""
};