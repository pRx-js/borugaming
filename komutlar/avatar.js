const Discord = require('discord.js');

exports.run = (client, message, args) => {
      if(message.channel.id != "699296334917664778") return message.channel.send("Lütfen komutlarınızı <#699296334917664778> kanalında kullanınız!").then(msg => msg.delete(3000));
    
    let user;
    
    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }
    
    const avatar = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor(`${user.username} Adlı Kullanıcının Profil Resmi`)
        .setImage(user.avatarURL)
        .setFooter(`İsteyen Kişi: ${message.author.tag}`)
    message.channel.sendEmbed(avatar)
    
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ["pp",'avatar'],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'avatar',
  category: 'kullanıcı',
  description: 'Belirtilen Kişinin veya Komutu Yazan Kişinin Avatarını Atar.',
  usage: '!avatar <@kişi-etiket> veya +avatar'
};