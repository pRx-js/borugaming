const Discord = require('discord.js')

exports.run = async (client, message, args) => {
   if(message.channel.id != "699296334917664778") return message.channel.send("Lütfen komutlarınızı <#699296334917664778> kanalında kullanınız!").then(msg => msg.delete(3000));
  if (!args.length || args.join('').length < 1) {
    return message.reply('lütfen komut adı giriniz. *(1 harf veya 1 harften fazla)*')
  }

  args = args.join('').toLowerCase();
  let commands = client.commands.map(c => c.help.name.toLowerCase()).filter(c => c.includes(args));
  if (commands.length === 0) {
    return message.reply('komut bulunamadı.')
  }
const eembed = new Discord.RichEmbed()
.setColor("RANDOM")
.setTitle('Komut Arama')
.setDescription(`*${args}* içeren ${commands.length} komut bulundu.`)
.addField('Komutlar',`${commands.join(`\n`)}`)
  await message.channel.send(eembed);
};

exports.conf = {
  aliases: ['komut-ara','komutara'],
  enabled: true,
  permLevel:3,
  guildOnly: true
};

exports.help = {
  name: 'komutara',
  description: 'Botta olan komutu ararsınız.',
  category: 'Kullanıcı',
  usage: 'komutara <komut adı>',
  example: ['komutara <komut adı>' ]
};