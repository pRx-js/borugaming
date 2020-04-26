const Discord = require('discord.js');

let botid = ('') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
      if(message.channel.id != "699296334917664778") return message.channel.send("Lütfen komutlarınızı <#699296334917664778> kanalında kullanınız!").then(msg => msg.delete(3000));
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`${client.user.username} Eğlence Komutları`)
    .setDescription(`**!8top:** Sihirli top sorduğunuz sorulara cevap verir.\n**!adamasmaca:** Adam asmaca oynarsınız.\n**!doğrulukcesaret:** Doğruluk mu cesaret mi oynarsınız.\n**!duello:** Etiketlediğiniz kişi ile duello atarsınız.\n**!emojiyazı:** Emojili yazı yazarsınız.\n**!espri:** Bot espri yapar.\n**!kaçcm:** Çavuşu ölçersiniz.\n**!rastgelerenk:** Bot size rastgele renk söyler.\n**!yazmaoyunu:** İlk yazan kazanır yarışmasını başlatır.\n**!yazıtura:** Yazı tura atarsınız.`)
    .setFooter('Börü Gaming Eğlence Komutları')
    .setThumbnail(client.user.avatarURL)
    message.channel.sendEmbed(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['eğlencekomutları'],
  permLevel: 0,
};

exports.help = {
  name: 'eğlencekomutları',
  description: '',
  usage: ''
};