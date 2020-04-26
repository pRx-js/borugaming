const Discord = require('discord.js')


const cümle = require('../oyun/yazmaoyunu.json');
let aktif = [];

exports.run = async (client, message) => {
        if(message.channel.id != "699296334917664778") return message.channel.send("Lütfen komutlarınızı <#699296334917664778> kanalında kullanınız!").then(msg => msg.delete(3000));
  if (aktif.includes(message.channel.id)) {
    return message.reply('Zaten başlatılmış bir oyun var.')
  }

  aktif.push(message.channel.id);
const eeembed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('Yazma Oyunu')
.setDescription(`Oyun ${message.author} tarafından başlatıldı. Botun biraz sonra yazacağı cümleyi ilk yazan kazanır. `)
.setFooter(`Bu görevi tamamlamak için ${1} dakikan var!`)
  let oyundurumu = await message.channel.send(eeembed);
let asıl = Math.floor(Math.random() * Object.keys(cümle).length) + 1;
  const embed = new Discord.RichEmbed()
  .setDescription(cümle[asıl])
  let cümlemesaj = await message.channel.send(embed)
  const collector = message.channel.createMessageCollector(
 msg => msg.content === cümle[asıl],
    {
      time: 5 * 60 * 5000,
      maxMatches: 1
    }
  );

  collector.on('end', async (collection, reason) => {
    let color, result;
    if (reason === 'time') {
      color = ("RED");
      result = 'Oyun bitti. Malesef, kimse zamanında yazmayı başaramadı.';
    }
    else {
      color = ("GREEN");
      result = `Oyun bitti. Kazanan **${collection.map(m => m.author)[0]}**!`;
    }
const eembed = new Discord.RichEmbed()
.setColor("RANDOM")
.setTitle('Yazma Oyunu')
.setDescription(result)
    await message.channel.send(result).catch(e => {
      client.log.error(e);
    });
    oyundurumu.delete().catch(() => {});
 
    cümlemesaj.delete().catch(() => {});

    aktif = aktif.slice(aktif.indexOf(message.channel.id) + 1, 1);
  });
};

exports.conf = {
  aliases: ['yazmaoyunu','yazma-oyunu','ilkyazan','yazmayarışması'],
  enabled: true,
  permLevel: 0,
  guildOnly: false
};

exports.help = {
  name: 'yazma-oyunu',
  description: 'Komut kullandıktan sonra, botun yazdığı cümleyi ilk yazan kazanır.',
  category: 'Oyun',
  usage:'yazma-oyunu',
};