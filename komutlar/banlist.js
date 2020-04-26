const Discord = require('discord.js')
exports.run = (bot, message, args) =>
{
      if(message.channel.id != "699296334917664778") return message.channel.send("Lütfen komutlarınızı <#699296334917664778> kanalında kullanınız!").then(msg => msg.delete(3000));
  let Discord = require('discord.js');
    var userlist = message.guild.fetchBans();
   userlist.then(collection =>
   {
     if(collection.first() == null)
     {
       const embed = new Discord.RichEmbed()
       .setTitle(`:x: BANLANAN KULLANICI BULUNMADI! :x:`)
       .setColor("GREEN");
       message.channel.send({embed});
     }
     else
     {
       const embed = new Discord.RichEmbed()
       .setTitle("🚫 BAN LİSTESİ: 🚫")
       .setColor("RED");
       for(userlist of collection)
       {
           var user = userlist[1];
           embed.addField(` **${user.tag}**`, `_________ _____________`);
       }
       message.channel.send({embed});
     }
   });
 }
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["banlılar","banliste","ban liste",'banlist'],
  permLevel: 2
};
module.exports.help = {
  name: 'banlist',
  description: 'Sunucundan Banlanan üyeleri gösterir.',
  usage: 'banlananlar'
};
