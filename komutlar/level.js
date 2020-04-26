const Discord = require('discord.js');
const request = require('node-superfetch');
const db = require('quick.db');
const { stripIndents } = require('common-tags');
const snekfetch = require("snekfetch");

exports.run = async (client, msg, args) => {
    if(msg.channel.id != "699296334917664778") return msg.channel.send("Lütfen komutlarınızı <#699296334917664778> kanalında kullanınız!").then(msg => msg.delete(3000));
  
  let u = msg.mentions.users.first() || msg.author;

        if(u.bot === true) {
                const embed = new Discord.RichEmbed()
                        .setDescription("Botların seviyesi bulunmamaktadır!")
                        .setColor("RANDOM")
                msg.channel.send(embed)
                return
        }
  
  var g = "50"
  
  var Canvas = require('canvas')
        var canvas = Canvas.createCanvas(750, 240)
        var ctx = canvas.getContext('2d');
        const avatarURL = u.displayAvatarURL
        const { body } = await request.get(avatarURL);
        const avatar = await Canvas.loadImage(body);
  
  ctx.fillStyle = "rgba(0, 0, 0, 0."+g+")";
  ctx.fill()
        ctx.fillRect(25, 20, 700, 200)  
  
  
  
        ctx.fillStyle = "rgba(0, 0, 0, 0.30)";
        ctx.fill()
        ctx.fillRect(0, 0, 750, 240)
  
        var re = "db3b3b"
        var blue = "33FFF7"
        var yellow = "ffff00"
  
  var xp = db.fetch(`puan_${u.id + msg.guild.id}`);
  var lvl = db.fetch(`seviye_${u.id + msg.guild.id}`);  
  
        let sira = ''
        const sorted = msg.guild.members.filter(u => !u.user.bot).array().sort((a, b) => { return db.fetch(`seviye_${b.user.id + msg.guild.id}`) - db.fetch(`seviye_${a.user.id + msg.guild.id}`) });
        const top10 = sorted.splice(0, msg.guild.members.size)
        const mappedID = top10.map(s => s.user.id);
        for(var i = 0; i < msg.guild.members.size; i++) {
                if(mappedID[i] === u.id) {
                        sira += `${i + 1}`
                }
        }

        var de = 1.6
        ctx.beginPath()
        ctx.fillStyle = "#999999";
        ctx.arc(257 + 18.5, 125.5 + 18.5 + 36.25, 18.5, 1.5 * Math.PI, 0.5 * Math.PI, true);
        ctx.fill();
        ctx.fillRect(257 + 18.5, 125.5 + 36.15, 250 * de, 37.5);
        ctx.arc(257 + 18.5 + 250 * de, 125.5 + 18.5 + 36.25, 18.75, 1.5 * Math.PI, 0.5 * Math.PI, false);
        ctx.fill();
        ctx.beginPath();
        ctx.fillStyle = `#${yellow}`;
        ctx.arc(257 + 18.5, 125.5 + 18.5 + 36.25, 18.5, 1.5 * Math.PI, 0.5 * Math.PI, true);
        ctx.fill();
        ctx.fillRect(257 + 18.5, 125.5 + 36.25, xp * de, 37.5);
        ctx.arc(257 + 18.5 + xp * de, 125.5 + 18.5 + 36.25, 18.75, 1.5 * Math.PI, 0.5 * Math.PI, false);
        ctx.fill();
        ctx.fillStyle = `#${blue}`;
        ctx.font = '28px Impact';
        ctx.textAlign = "right";
        ctx.fillText(`Sıralama #${sira} | Seviye ${lvl || 0}`, 670, 70);
        ctx.font = '20px Impact';
        ctx.textAlign = "right";
        ctx.fillText(`${xp || 0} / 250 XP`, 670, 100);
  ctx.fillStyle = `#fcfdff`;
  ctx.font = 'bold 28px Impact';
        ctx.textAlign = "left";
        ctx.fillText(`${u.tag}`, 195, 150)
        ctx.beginPath();
        ctx.lineWidth = 8;
  ctx.fill()
        ctx.lineWidth = 8;
        ctx.arc(43 + 67, 67 + 67, 67, 0, 2 * Math.PI, false);
    ctx.clip();
    ctx.drawImage(avatar, 43, 67, 135, 130);
    
        msg.channel.send({files:[{attachment:canvas.toBuffer(),name:"seviye.png"}]})
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['seviye','level','xp','rank'],
  permLevel: 0,
};

exports.help = {
  name: 'level',
  description: '',
  usage: ''
};