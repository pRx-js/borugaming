const Discord = require('discord.js')

exports.run = (client, message, args) => {
  if(message.channel.id != "699296334917664778") return message.channel.send("Lütfen komutlarınızı <#699296334917664778> kanalında kullanınız!").then(msg => msg.delete(3000));
	try {
		const embed = new Discord.RichEmbed()
			.setAuthor(`${message.guild.name} Sunucusu Roller Listesi`)
    .setDescription(`${message.guild.roles.filter(r => r.name !== "@everyone").map(r => r).join(' | ')}`)
			.setColor(0x808080)
    .setFooter(`${message.author.tag} Tarafından istendi.`)
    .setTimestamp()
		message.channel.send({embed})
	} catch (err) {
		const embed = new Discord.RichEmbed()
    .setAuthor(`${message.guild.name} Sunucusu Roller Listesi`)
			.setDescription('Çok fazla rol bulunmakta veya rol bulunmamakta!')
			.setColor(0x00ffff)
			.setTimestamp()
		message.channel.send({embed})
	}
}

exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: ['roller','roles','tümroller'],
	permLevel: 0,
	kategori: 'kullanıcı'
}

exports.help = {
	name: 'roller',
	description: 'Sunucuda bulunan rolleri gösterir.',
	usage: 'roller'
}