const Discord = require('discord.js');
const weather = require('weather-js');

exports.run = (client, message, args) => {
      if(message.channel.id != "699296334917664778") return message.channel.send("Lütfen komutlarınızı <#699296334917664778> kanalında kullanınız!").then(msg => msg.delete(3000));
  weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
      if (err) message.channel.send(err);
      if (result === undefined || result.length === 0) {
          message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Lütfen bir konum giriniz.').setColor('RED'));
          return;
      }
      var current = result[0].current;
      var location = result[0].location;
      const embed = new Discord.RichEmbed()
          .setDescription(`**${current.skytext}**`)
          .setAuthor(`${current.observationpoint} için hava durumu`)
          .setThumbnail(current.imageUrl)
          .setColor('RANDOM')
          .addField('Zaman Dilimi',`UTC${location.timezone}`, true)
          .addField('Derece Türü',location.degreetype, true)
          .addField('Sıcaklık',`${current.temperature} Derece`, true)
          .addField('Hava', `${current.feelslike}`, true)
          .addField('Rüzgar',current.winddisplay, true)
          .addField('Nem', `${current.humidity}%`, true)
          message.channel.send({embed});
  })
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['havadurumu','hava'],
  permLevel: "0"
};

exports.help = {
  name: "havadurumu",
  description: "hava durumunu gösterir",
  usage: "havadurumu"
};