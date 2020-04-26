const Discord = require("discord.js");
const ms = require("ms");
const ayarlar = require('../ayarlar.json');
const prefix = ayarlar.prefix;


var mutelirolu = "Gagged"

module.exports.run = async (bot, message, args) => {

  let mutekisi = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!mutekisi) return message.reply(`:warning: Lütfen bir kullanıcı etiketleyiniz! \nDoğru Kullanım; \`${prefix}gag <@kullanıcı> <1sn/1dk/1sa/1g>\``).then(message => message.delete(5000));  
  if(mutekisi.hasPermission("ADMINISTRATOR")) return message.reply(`:warning: Yetkili bir kişiyi gaglanamaz!`).then(message => message.delete(5000)); 
  message.delete()
  let muterol = message.guild.roles.find(`name`, mutelirolu);
  if(!muterol){
    try{
      muterol = await message.guild.createRole({
        name: mutelirolu,
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterol, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false,
          ADD_FILES: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  let mutezaman = args[1]
  .replace(`sn`, `s`)
  .replace(`dk`, `m`)
  .replace(`sa`, `h`)
  .replace(`g`, `d`)

  if(!mutezaman) return message.reply(`:warning: Lütfen bir zaman giriniz! \nDoğru Kullanım; \`${prefix}gag <@kullanıcı> <1sn/1dk/1sa/1g>\``)
message.delete()
  await(mutekisi.addRole(muterol.id));
  message.reply(`<@${mutekisi.id}> kullanıcısı ${args[1]} süresi boyunca gaglandı!`).then(message => message.delete(5000));  
  message.delete()

  setTimeout(function(){
    mutekisi.removeRole(muterol.id);
    message.channel.send(`<@${mutekisi.id}> kullanıcısının gaglanması sona erdi!`).then(message => message.delete(5000));  
  }, ms(mutezaman));
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['gag','tıka'],
    permLevel: 2
  };
  
  exports.help = {
    name: "gag",
    description: "Etiketlediğiniz kişiye belirttiğiniz süre kadar mute atar.",
    usage: "mute <@kullanıcı> <1sn/1dk/1sa/1g>"
  };