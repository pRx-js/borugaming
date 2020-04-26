const Discord = require("discord.js");
const ms = require("ms");
const ayarlar = require('../ayarlar.json');
const prefix = ayarlar.prefix;

module.exports.run = async (bot, message, args) => {

  let mutekisi = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!mutekisi) return message.reply(`:warning: Lütfen bir kullanıcı etiketleyiniz! \nDoğru Kullanım; \`${prefix}mute <@kullanıcı> <1sn/1dk/1sa/1g>\``).then(message => message.delete(5000));  
  if(mutekisi.hasPermission("ADMINISTRATOR")) return message.reply(`:warning: Yetkili bir kişiyi susturulamaz!`).then(message => message.delete(5000)); 
  message.delete()
  let mutezaman = args[1]
  .replace(`sn`, `s`)
  .replace(`dk`, `m`)
  .replace(`sa`, `h`)
  .replace(`g`, `d`)

  if(!mutezaman) return message.reply(`:warning: Lütfen bir zaman giriniz! \nDoğru Kullanım; \`${prefix}mute <@kullanıcı> <1sn/1dk/1sa/1g>\``)
message.delete()
  await(mutekisi.setMute(true, `gaglandın`));
  message.reply(`<@${mutekisi.id}> kullanıcısı ${args[1]} süresi boyunca susturuldu!`).then(message => message.delete(5000));  
  message.delete()

  setTimeout(function(){
    mutekisi.setMute(false,`Süresi dolduğu için susturması kaldırıldı.`)
    message.channel.send(`<@${mutekisi.id}> kullanıcısının susturulması sona erdi!`).then(message => message.delete(5000));  
  }, ms(mutezaman));
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['mute','sustur'],
    permLevel: 2
  };
  
  exports.help = {
    name: "mute",
    description: "Etiketlediğiniz kişiye belirttiğiniz süre kadar mute atar.",
    usage: "mute <@kullanıcı> <1sn/1dk/1sa/1g>"
  };