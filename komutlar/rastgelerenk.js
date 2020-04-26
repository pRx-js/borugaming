const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
        if(message.channel.id != "699296334917664778") return message.channel.send("Lütfen komutlarınızı <#699296334917664778> kanalında kullanınız!").then(msg => msg.delete(3000));
   message.channel.send('Renk yükleniyor.').then(message => {
      var espriler = ['Kırmızı','Mavi','Beyaz.','Siyah.','Lacivert.','Sarı.','Mor.','Pembe.','Yeşil.','Camgöbeği.','Turuncu.','Eflatun.','Bordo.','Kahverengi.','Deniz mavisi.','Gri.'];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];
            message.edit(`${espri}`);
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['rastgele-renk','rastgelerenk'],
  permLevel: 0
};

exports.help = {
  name: 'rastgele-renk',
  description: 'Espri yapar.',
  usage: 'rastgele-renk'
}; 