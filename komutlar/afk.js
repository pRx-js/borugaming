const Discord = require('discord.js');
const db = require("quick.db");

exports.run = async(client, message, args) => {
      if(message.channel.id != "699296334917664778") return message.channel.send("Lütfen komutlarınızı <#699296334917664778> kanalında kullanınız!").then(msg => msg.delete(3000));

      let sebep = args.slice(0).join(" ") || "Belirtilmemiş"
  let user = message.member

      db.set(`afks_${message.author.id}`, sebep)

        message.reply(`Artık **${sebep}** sebebi ile **AFK** modundasın!`)
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'afk',
  description: 'AFK olursunuz. (Birisi sizi etiketlediğinde AFK olduğunuzu söyler.)',
  usage: 'afk <sebep>'
};